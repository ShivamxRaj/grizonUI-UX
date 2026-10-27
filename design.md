# OptimAI / GriZon Design System Specification

## 1. Context and Goals

### Design Intent
Deliver an implementation-ready, deterministic, token-driven design system for OptimAI and sovereign AI agent interfaces that guarantees mathematical visual consistency, WCAG 2.2 AA accessibility, and zero-latency component delivery.

### Goals
- **Token Precision:** Replace raw values with strict semantic tokens across typography, color, spacing, radius, and elevation.
- **Exhaustive State Matrix:** Mandate 7 component states (default, hover, focus-visible, active, disabled, loading, error) for every interactive primitive.
- **Accessibility by Default:** Guarantee WCAG 2.2 AA compliance with testable criteria for contrast, keyboard navigation, and focus visibility.
- **Architectural Clarity:** Preserve uncluttered layouts with generous spacing, crisp hairline borders, and zero non-semantic decorative clutter.

---

## 2. Design Tokens and Foundations

### 2.1 Typography Tokens
All typography tokens must resolve to system sans-serif font families (`Plus Jakarta Sans` or `Helvetica Neue` fallback stack) with strict sizing and line-height bindings.

| Token | Family | Size | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `font.family.primary` | `Plus Jakarta Sans`, system-ui, sans-serif | — | — | — | Core interface, buttons, inputs |
| `font.family.mono` | `JetBrains Mono`, monospace | — | — | — | Code snippets, telemetry, hashes |
| `font.size.xs` | Primary / Mono | 12px (`0.75rem`) | 16px (`1rem`) | 400 / 600 | Metadata, badges, timestamps |
| `font.size.sm` | Primary | 14px (`0.875rem`) | 20px (`1.25rem`) | 400 / 500 | Body compact, table cells |
| `font.size.base` | Primary | 16px (`1rem`) | 24px (`1.5rem`) | 400 / 600 | Default body text, form inputs |
| `font.size.lg` | Primary | 18px (`1.125rem`) | 26px (`1.625rem`) | 600 | Card titles, subsection headers |
| `font.size.xl` | Primary | 24px (`1.5rem`) | 32px (`2rem`) | 700 | Section titles |
| `font.size.display` | Primary | 48px (`3rem`) | 52px (`3.25rem`) | 800 | Hero primary titles |

### 2.2 Color Tokens
Components must consume semantic tokens rather than raw hex codes.

| Token | Raw Value | Contrast vs Surface | Usage |
| :--- | :--- | :--- | :--- |
| `color.text.primary` | `#07091B` (Deep Slate) | 16.4:1 (Pass AAA) | Primary headings, body copy |
| `color.text.secondary` | `#52525B` (Zinc-600) | 5.8:1 (Pass AA) | Subtitles, supporting descriptions |
| `color.text.tertiary` | `#71717A` (Zinc-500) | 4.6:1 (Pass AA) | Field labels, breadcrumb links |
| `color.text.inverse` | `#FFFFFF` (Pure White) | 16.4:1 vs Pine | Text on dark buttons / banners |
| `color.surface.base` | `#FAF9F5` (Warm Alabaster) | — | Application canvas & page background |
| `color.surface.card` | `#FFFFFF` (Surface White) | — | Elevated cards, workbenches, modals |
| `color.surface.muted` | `#F4F2EC` (Muted Warm) | — | Code blocks, telemetry strips |
| `color.brand.primary` | `#1E3A3A` (Botanical Pine) | 9.8:1 vs Canvas | Primary CTA buttons, active tabs |
| `color.brand.accent` | `#D97736` (Warm Terracotta) | 4.7:1 vs White | Highlights, alert badges, focus rings |
| `color.status.success` | `#059669` (Emerald-600) | 4.8:1 vs White | Success indicators, verified badges |
| `color.status.error` | `#DC2626` (Red-600) | 5.2:1 vs White | Validation errors, failed checks |
| `color.border.hairline` | `#E6E4DD` (Hairline Stone) | 1.3:1 (Structural) | Crisp component dividing lines |
| `color.border.focus` | `#1E3A3A` (Botanical Pine) | 9.8:1 vs Canvas | Accessible focus indicator outline |

### 2.3 Spacing Scale
All margins, padding, and gaps must strictly adhere to the 4px baseline scale. One-off spacing exceptions are strictly prohibited.

| Token | Pixels | Rem Equivalent | Primary Application |
| :--- | :--- | :--- | :--- |
| `space.1` | 4px | `0.25rem` | Micro-padding inside badges, icon gaps |
| `space.2` | 8px | `0.5rem` | Button gap, input inline padding |
| `space.3` | 12px | `0.75rem` | Compact card padding, chip spacing |
| `space.4` | 16px | `1rem` | Standard card internal padding |
| `space.6` | 24px | `1.5rem` | Container padding, grid gap |
| `space.8` | 32px | `2rem` | Section sub-groups, workbench padding |
| `space.12` | 48px | `3rem` | Medium section vertical rhythm |
| `space.16` | 64px | `4rem` | Major section margins |
| `space.24` | 96px | `6rem` | Hero and footer vertical breathing room |

### 2.4 Border Radius, Border, and Shadow Tokens
In alignment with Rule 5, interfaces must favor crisp hairline borders over muddy drop shadows.

| Token | Value | Semantic Intent |
| :--- | :--- | :--- |
| `radius.sm` | 6px | Buttons, input fields, code chips |
| `radius.md` | 12px | Card elements, dropdown panels |
| `radius.lg` | 24px | Outer workbench windows, modal dialogs |
| `radius.full` | 9999px | Action pills, status indicator tags |
| `border.hairline` | `1px solid var(--color-border-hairline)` | Standard bounding rule |
| `border.accent` | `2px solid var(--color-brand-accent)` | Active tier or highlighted selection |
| `shadow.none` | `none` | Clean architectural aesthetic |
| `shadow.subtle` | `0 1px 3px rgba(7, 9, 27, 0.04)` | Subtle separation for sticky navigation |

---

## 3. Component-Level Rules

### 3.1 Primary Action Button (`Button.Primary`)
Buttons must initiate actions with clear, deterministic feedback.

#### Anatomy
1. Container (`radius.full` or `radius.sm`)
2. Leading icon (optional, 18px × 18px)
3. Action text (`font.size.sm`, `font.weight.base=600`)
4. Trailing arrow icon (optional, 18px × 18px)

#### State Matrix (Must implement all 7 states)
- **Default:** Background `color.brand.primary` (`#1E3A3A`), text `color.text.inverse` (`#FFFFFF`), border transparent.
- **Hover:** Background `#142929`, scale `1.01`, pointer cursor.
- **Focus-Visible:** Outline `2px solid color.border.focus`, outline-offset `2px`. Outline must never be suppressed with `outline: none`.
- **Active:** Scale `0.98`, background `#0E1D1D`.
- **Disabled:** Background `#E6E4DD`, text `#A1A1AA`, cursor `not-allowed`, `aria-disabled="true"`.
- **Loading:** Spinner icon replaces leading icon, action text maintains container width, `aria-busy="true"`.
- **Error:** Border `1px solid color.status.error`, brief horizontal shake animation (150ms).

#### Interaction Behavior
- **Keyboard:** Must trigger on `Enter` and `Space` keydown.
- **Pointer:** Hover state fires on cursor enter; active state triggers on mousedown.
- **Touch:** Touch target must be at least 44px × 44px minimum per WCAG 2.5.8.

---

### 3.2 Secondary Action Button (`Button.Secondary`)
Used for supporting or alternate actions (e.g., "Test Live Workbench", "Inspect Pipeline").

#### Anatomy & State Matrix
- **Default:** Background `color.surface.card` (`#FFFFFF`), text `color.text.primary` (`#07091B`), border `border.hairline` (`#E6E4DD`).
- **Hover:** Background `color.surface.muted` (`#F4F2EC`), border `color.text.secondary` (`#52525B`).
- **Focus-Visible:** 2px outline `color.border.focus` with 2px offset.
- **Active:** Scale `0.98`.
- **Disabled:** Opacity 50%, cursor `not-allowed`.
- **Loading:** Spinning loader with disabled pointer events.
- **Error:** Border `color.status.error`.

---

### 3.3 Interactive Selection Pill / Chip (`Control.Pill`)
Used in scenario pickers (e.g., Market Quant, DPDP Audit, Dev Studio).

#### Anatomy & State Matrix
- **Default (Unselected):** Background `color.surface.card`, border `border.hairline`, text `color.text.secondary`.
- **Selected:** Background `color.brand.primary`, border transparent, text `color.text.inverse`.
- **Hover (Unselected):** Border `color.text.secondary`, text `color.text.primary`.
- **Focus-Visible:** 2px outline in `color.brand.accent` with 2px offset.
- **Keyboard:** Arrow keys (`Left` / `Right`) move focus across adjacent pills; `Space` or `Enter` activates selection.

---

### 3.4 Telemetry Counter Metric (`Display.Counter`)
Used in the 4-metric strip for real-time institutional metrics.

#### Anatomy
1. Metric Value: `font.size.display`, `font.weight.base=800`, text `color.text.primary` or `color.brand.primary`.
2. Metric Label: `font.size.sm`, `font.weight.base=600`, text `color.text.primary`.
3. Descriptive Footnote: `font.size.xs`, `font.family.mono`, text `color.text.secondary`.

#### Responsive Behavior
- **Desktop (≥1024px):** 4 columns in a single row, separated by vertical hairline borders (`border-r border.hairline`).
- **Tablet (768px - 1023px):** 2 × 2 grid with horizontal hairline dividers.
- **Mobile (<768px):** 1-column stack with generous `space.4` vertical spacing.

---

## 4. Accessibility Requirements & Acceptance Criteria

Target: **WCAG 2.2 Level AA Compliance**

### 4.1 Contrast Constraints (SC 1.4.3 & SC 1.4.11)
- All normal text (`font.size.base` and smaller) must achieve a contrast ratio of at least **4.5:1** against its backing surface.
- All large text (`font.size.lg` bold or `font.size.xl`+) must achieve at least **3.0:1**.
- UI component boundaries and focus indicators must achieve at least **3.0:1** against adjacent backgrounds.

### 4.2 Keyboard Navigation & Focus (SC 2.1.1 & SC 2.4.7)
- **Tab Sequence:** Every interactive element (links, buttons, switches, accordion headers) must be reachable via `Tab` key.
- **Focus Indicator:** Must be visibly distinct with at least 2px thickness and a contrast ratio ≥ 3.0:1 against both the component and the background.
- **No Focus Traps:** Focus must be able to leave all sub-windows, accordions, and dialogs using standard navigation keys (`Tab`, `Shift+Tab`, `Escape`).

### 4.3 Testable Acceptance Criteria
| ID | Requirement | Test Method | Pass Criteria |
| :--- | :--- | :--- | :--- |
| `AC-A11Y-01` | Contrast: Body Copy | Automated axe-core / Lighthouse audit | Contrast ≥ 4.5:1 on `#FAF9F5` canvas |
| `AC-A11Y-02` | Keyboard Operability | Manual tab navigation through homepage | 100% of links and scenario tabs triggerable via `Enter`/`Space` |
| `AC-A11Y-03` | Target Size | Browser computed bounding rect | Interactive touch targets ≥ 44px × 44px |
| `AC-A11Y-04` | Non-Visual Semantics | Screen reader verification (NVDA / VoiceOver) | Accordion expansion state announced via `aria-expanded` |

---

## 5. Content and Tone Standards

### Tone of Voice
- **Concise:** Deliver the statutory or technical truth in the fewest possible words.
- **Confident:** State deterministic facts, latencies, and citations without hedging or generic corporate fluff.
- **Implementation-Focused:** Reference concrete frameworks, statutory rules, and engineering metrics (e.g., `DPDP Rule 7(4)`, `NSE Tick Oracles`, `Linux Container Sandbox`).

### Copy Examples
- **Good (Compliant):**  
  `"Audit ap-south-1 replication policies against DPDP Rule 7. Verified SHA-256 seal delivered."`
- **Bad (Prohibited):**  
  `"Our cutting-edge, revolutionary AI effortlessly helps you supercharge your compliance journey!"`

---

## 6. Anti-Patterns and Prohibited Implementations

Teams must strictly reject the following implementations during review:

1. **No Unprompted Drop Shadows:** Do not use muddy blur shadows (`box-shadow: 0 20px 50px rgba(0,0,0,0.25)`). Use crisp `border.hairline` instead.
2. **No Background Blob Shapes:** Do not insert floating blurred gradient circles or organic blobs in page backdrops. Background must remain a calm, flat architectural canvas with subtle dot grid.
3. **No Low-Contrast Text:** Never render text below 4.5:1 contrast (e.g., gray `#A1A1AA` on white surface is prohibited for readable body copy).
4. **No Hidden Focus Indicators:** Using `outline: none` without a custom replacement `:focus-visible` ring is strictly prohibited.
5. **No Hardcoded Hex Literals in Components:** Component markup must use designated design tokens or Tailwind semantic tokens (`border-[#E6E4DD]`, `bg-[#1E3A3A]`).
6. **No Fake Roadmaps for Core Products:** Active core specialists (such as Legal Intelligence India) must never be marked as "Coming Soon" or deferred.

---

## 7. Quality Assurance (QA) Checklist

Before merging any code touching the UI:

- [ ] **Token Adherence:** Are all colors, fonts, margins, and border radii mapped to the design system scale?
- [ ] **State Matrix Verification:** Have all 7 states (default, hover, focus-visible, active, disabled, loading, error) been tested?
- [ ] **Accessibility Audit:** Does the automated axe / Lighthouse accessibility score equal 100?
- [ ] **Contrast Verification:** Have all text-on-surface pairings passed WCAG 2.2 AA contrast ratios?
- [ ] **Keyboard Only Navigation:** Can a user complete all primary workflows using only the keyboard (`Tab`, `Enter`, `Space`, `Escape`)?
- [ ] **Screen Reader Labels:** Do all icon-only buttons include descriptive `aria-label` attributes?
- [ ] **Responsive Integrity:** Does the layout break gracefully across 375px (mobile), 768px (tablet), 1024px (desktop), and 1440px (wide)?
- [ ] **Zero Orphan Text:** Are headings and subtitles constrained with `text-balance` and `max-w-xl` / `max-w-2xl`?
