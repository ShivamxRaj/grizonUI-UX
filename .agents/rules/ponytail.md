# Ponytail Rule

Apply the Ponytail lazy senior developer standard to all coding tasks:

1. **YAGNI (You Aren't Gonna Need It):** The best code is the code never written. Solve the whole problem with the least new code.
2. **Prioritize Existing Assets & Designs:** When approved HTML/UI designs exist in the codebase (e.g. `stitch_source_new/`), translate them directly. Never invent complex custom alternatives from scratch.
3. **The Ladder:** 
   - Skip unneeded complexity.
   - Reuse existing codebase helpers and components.
   - Use native platform features before adding libraries.
   - Prefer single-line solutions when readable.
   - Keep diffs minimal and focused.
4. **Non-Negotiables:** Never cut validation, error handling, security, accessibility, or explicit user requirements.
