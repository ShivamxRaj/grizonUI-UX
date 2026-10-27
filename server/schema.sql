-- =====================================================================
-- GRIZON AI — SOVEREIGN POSTGRESQL PRODUCTION DDL SCHEMA
-- Task Area 3: Database Schema & Transaction Isolation (PostgreSQL)
-- Implements: Strict transaction isolation, SELECT FOR UPDATE row-level locks,
-- and composite indexes on (conversation_id, created_at ASC).
-- =====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    jurisdiction VARCHAR(100) DEFAULT 'Delhi High Court & Supreme Court',
    primary_domain VARCHAR(100) DEFAULT 'Markets & Derivatives',
    timeframe VARCHAR(50) DEFAULT 'Swing',
    tech_stack VARCHAR(255),
    comm_style VARCHAR(50) DEFAULT 'concise',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. USER CREDIT WALLETS (WITH ROW-LEVEL LOCKING SAFETY)
CREATE TABLE IF NOT EXISTS credit_wallets (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    balance_credits NUMERIC(10, 2) NOT NULL DEFAULT 150.00 CHECK (balance_credits >= 0.00),
    tier VARCHAR(50) NOT NULL DEFAULT 'Explorer',
    currency VARCHAR(10) DEFAULT 'INR',
    rollover_date TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '90 days'),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. PAYMENT TRANSACTIONS LEDGER (PHONEPE PG INTEGRATION)
CREATE TYPE txn_status AS ENUM ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED');

CREATE TABLE IF NOT EXISTS transactions (
    id VARCHAR(128) PRIMARY KEY, -- merchantTransactionId (e.g. GZ_TXN_...)
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    amount_rupees NUMERIC(12, 2) NOT NULL,
    amount_paise BIGINT NOT NULL, -- Stored strictly as integer paise
    credits_allocated NUMERIC(10, 2) NOT NULL,
    provider VARCHAR(50) NOT NULL DEFAULT 'PhonePe',
    provider_reference_id VARCHAR(128),
    status txn_status NOT NULL DEFAULT 'PENDING',
    checksum VARCHAR(256) NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

CREATE INDEX idx_transactions_user ON transactions(user_id, created_at DESC);
CREATE INDEX idx_transactions_status ON transactions(status);

-- 5. PROJECT WORKSPACES
CREATE TABLE IF NOT EXISTS project_workspaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    scoped_rules TEXT[],
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_project_user ON project_workspaces(user_id);

-- 6. CONVERSATIONS TABLE
CREATE TABLE IF NOT EXISTS conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES project_workspaces(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL DEFAULT 'New Conversation Enclave',
    active_agent VARCHAR(100) DEFAULT 'Auto-Router',
    active_model VARCHAR(100) DEFAULT 'Auto',
    is_archived BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_conversations_user ON conversations(user_id, updated_at DESC);

-- 7. MESSAGES TABLE WITH COMPOSITE INDEX
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,
    agent_id VARCHAR(100),
    credits_deducted NUMERIC(5, 2) DEFAULT 0.00,
    trace_metadata JSONB DEFAULT '{}'::jsonb,
    artifact_payload JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- CRITICAL PERFORMANCE INDEX (Mandated by System Specification):
-- Composite index on (conversation_id, created_at ASC) for fast cursor-based pagination
CREATE INDEX idx_messages_conversation_cursor 
ON messages (conversation_id, created_at ASC);

-- 8. DUAL-LAYER PERSISTENT MEMORY VAULT
CREATE TABLE IF NOT EXISTS memory_nodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES project_workspaces(id) ON DELETE CASCADE,
    layer VARCHAR(20) NOT NULL CHECK (layer IN ('LAYER_1_PROFILE', 'LAYER_2_CONVERSATION', 'PROJECT_SCOPED')),
    category VARCHAR(50) NOT NULL, -- 'jurisdiction', 'watchlist', 'tech_stack', 'heuristic'
    memory_text TEXT NOT NULL,
    is_pinned BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    confidence_score NUMERIC(3, 2) DEFAULT 1.00,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_memory_nodes_user ON memory_nodes(user_id, is_active);

-- 9. AUTONOMOUS SCHEDULED TASKS & RUNS
CREATE TABLE IF NOT EXISTS scheduled_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES project_workspaces(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    prompt TEXT NOT NULL,
    specialist_id VARCHAR(100) NOT NULL,
    cadence VARCHAR(50) NOT NULL, -- 'daily', 'hourly', 'weekly', 'monthly'
    daily_runs_count INT NOT NULL DEFAULT 1 CHECK (daily_runs_count BETWEEN 1 AND 12),
    scheduled_clock_times TEXT[] NOT NULL DEFAULT ARRAY['09:20 IST'],
    is_paused BOOLEAN NOT NULL DEFAULT FALSE,
    daily_credit_cost NUMERIC(6, 2) NOT NULL DEFAULT 3.50,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_run_at TIMESTAMPTZ,
    next_run_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS scheduled_task_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID NOT NULL REFERENCES scheduled_tasks(id) ON DELETE CASCADE,
    execution_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status VARCHAR(50) NOT NULL DEFAULT 'COMPLETED',
    credits_charged NUMERIC(5, 2) NOT NULL DEFAULT 3.50,
    delta_summary TEXT,
    artifact_snapshot JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_task_runs_task ON scheduled_task_runs(task_id, execution_timestamp DESC);

-- =====================================================================
-- 10. STRICT TRANSACTION ISOLATION & ROW-LEVEL LOCKING PROCEDURE
-- Prevents race conditions and double-spending on concurrent API calls.
-- =====================================================================

CREATE OR REPLACE FUNCTION deduct_user_credits(
    p_user_id UUID,
    p_credits_to_deduct NUMERIC(10, 2)
)
RETURNS TABLE (
    success BOOLEAN,
    remaining_balance NUMERIC(10, 2),
    error_message TEXT
) 
LANGUAGE plpgsql
AS $$
DECLARE
    v_current_balance NUMERIC(10, 2);
BEGIN
    -- STEP 1: Acquire exclusive row-level lock via SELECT FOR UPDATE
    SELECT balance_credits 
    INTO v_current_balance
    FROM credit_wallets
    WHERE user_id = p_user_id
    FOR UPDATE;

    IF NOT FOUND THEN
        RETURN QUERY SELECT FALSE, 0.00::NUMERIC, 'Wallet not found'::TEXT;
        RETURN;
    END IF;

    -- STEP 2: Verify sufficient balance
    IF v_current_balance < p_credits_to_deduct THEN
        RETURN QUERY SELECT FALSE, v_current_balance, 'Insufficient credit balance'::TEXT;
        RETURN;
    END IF;

    -- STEP 3: Deduct credits and update record safely
    UPDATE credit_wallets
    SET 
        balance_credits = balance_credits - p_credits_to_deduct,
        updated_at = NOW()
    WHERE user_id = p_user_id;

    RETURN QUERY SELECT TRUE, (v_current_balance - p_credits_to_deduct), NULL::TEXT;
END;
$$;
