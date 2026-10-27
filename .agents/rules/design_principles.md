# UI & UX Core Design Principles (User Directives)

Always strictly enforce these 10 core principles across every page, component, and style in the project:

1. **Less cluster, more clarity:**
   - Eliminate filler cards, dense text walls, and unnecessary UI boxes.
   - Every element must have a clear purpose and breathing room.

2. **Limit your colour palette:**
   - Strict palette: Warm Alabaster (`#FAF9F5`), Deep Slate/Charcoal (`#07091B`), Botanical Pine (`#1E3A3A`), Warm Terracotta (`#D97736`), Hairline Border (`#E6E4DD`).
   - Do not introduce arbitrary accent colors or rainbow gradients.

3. **Use fewer fonts and weights:**
   - Standard: `Plus Jakarta Sans` for all headings and body copy (primarily 400 regular and 600 semibold).
   - Monospace: `JetBrains Mono` exclusively for telemetry, code, and small status badges.
   - Never use serif or AI-looking fonts (`Newsreader`, Georgia).

4. **Add more spacing:**
   - Increase section padding (`py-20`, `py-28`, `gap-8`, `gap-12`).
   - Give headlines, cards, and interactive consoles ample headroom.

5. **Use borders instead of shadow:**
   - Avoid heavy or muddy drop shadows (`shadow-lg`, `shadow-xl`, dark diffuse shadows).
   - Use crisp, clean hairline borders (`border border-hairline` / `border-[#E6E4DD]`) with subtle background contrast.

6. **Do not use shapes in the background:**
   - Never use random blurred gradient blobs, floating colored circles, or arbitrary decorative shapes in backgrounds.
   - Keep background canvas clean, architectural, and flat.

7. **Make images stand out:**
   - Feature UI visuals, mockups, and charts with high fidelity, crisp frame definition, and high contrast against the canvas.

8. **Add dynamic to the layout:**
   - Avoid monotonous stacked cards. Use split-screen workbenches, interactive state toggles, live telemetry, and asymmetrical rhythm.

9. **Use text wrapping smartly:**
   - Use strict `max-w-xl`, `max-w-2xl` line limits, `text-balance`, and tight line-heights to eliminate awkward word wraps and orphans.

10. **Split images into columns & put images outside the layout:**
    - Use multi-column visual splits (e.g. side-by-side compare, split-pane workbenches).
    - Allow hero visuals and dashboards to bleed or offset beyond the standard text grid container (peaking container, bleed canvas).
