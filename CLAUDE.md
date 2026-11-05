@AGENTS.md

# dianango.com — design rules (Ringside design system)

Diana's UX portfolio. Positioning: UX researcher, clean and calm, with one playful moment (the hero boxing game). Every visual change follows these rules.

## Source of truth
- Tokens: `styles/tokens.css`. Components: `styles/components.css`. Game: `styles/hero-fight.css` + `components/HeroFight.tsx` + `components/heroFightEngine.js`.
- Never hard-code a hex value, font, shadow or spacing in a component. Use the CSS variables. If something is missing, add a token to `tokens.css` first.
- Full visual spec: `../Updated UI/design-handoff/reference/Ringside-Design-System.pdf` (outside this repo).

## Color — 60 / 30 / 10
- 60% `--sand` (#d6cab1): page background everywhere.
- 30% `--cream` (#f4efe6): cards, nav, ticker, panels, inputs.
- 10% `--navy` (#14155b): the only UI accent — primary buttons, links, tags, focus rings, active nav.
- Text: `--ink` (#1d1b1a) for headings/body, `--ink-muted` (#4f473e) for captions/metadata. Nothing lighter for text.
- `--taupe` is decorative dividers on sand only. Never text, never a control border.
- The game keeps its own arcade colors (blue/red boxers, dark arena). Do not restyle the game's internals.

## Type
- Jersey 10 (`--font-display`): hero headline, page titles, section headings, card titles. Never below 24px, never for paragraphs.
- IBM Plex Mono (`--font-mono`): everything else — body, labels, buttons, nav, captions.
- Press Start 2P (`--font-arcade`): inside the game only.
- Use the type classes in `tokens.css` (`display-xl`, `display-lg`, `heading`, `subheading`, `body-lg`, `body`, `body-sm`, `label`).
- Body copy ~68 characters per line max.

## Shape & motion
- Square corners (`--radius-none`). `--radius-sm` for tags/inputs, `--radius-md` for thumbnails and the game frame. Never round past 4px.
- Hard offset shadows only (`--shadow-card`, `--shadow-button`). No blur, no soft shadows, no gradients.
- Borders: `--border-thick` (3px ink) on cards, nav, ticker; `--border-thin` (2px) on tags, inputs, secondary buttons.
- Transitions use `steps(2)` timing (pixel-snap). Respect `prefers-reduced-motion` everywhere.

## Components & usage
- One `.ds-btn--primary` per view. Secondary actions use `.ds-btn--secondary`; low emphasis uses `.ds-btn--text`.
- Tags: outline for methods/skills, `--solid` for one highlight max, `--quiet` for metadata. Max 4 per card. Not clickable.
- Case-study cards: whole card is one link; thumbnail → eyebrow → title → one-sentence summary → tags.
- Project thumbnails: use `<ProjectThumb initial="P" />` until real screenshots exist; vary `variant` (0–2) so neighbors differ.
- Nav: name in Jersey 10 (navy) + up to 5 uppercase mono links; current page gets `aria-current="page"`.
- There is no Resume page: the nav's "Resume" item downloads `public/resume/Diana_Ngo_Resume.pdf` directly (Diana's call, Oct 2026).

## Homepage decisions (Oct 2026)
- Hero headline is **"Hi, I'm Diana."** (`display-xl`), not "DIANA NGO".
- The "Open to full-time" availability status is **removed**.
- The skills ticker was **removed** from the homepage (Diana's call, Oct 2026). The `.ds-ticker` styles remain in `components.css` unused.
- Hero right column is `<HeroFight />` with "Click to punch" beside it.

## Accessibility (non-negotiable)
- Text contrast ≥ 4.5:1 (all token pairings above pass).
- Visible focus: 3px navy outline, 3px offset.
- The game canvas stays keyboard-playable (arrows + space) and keeps its aria-label.
- Test at 375px, 768px and 1280px widths.

## Case studies
- New case studies use `components/CaseStudyTemplate.tsx`: each project file is a `CaseStudyContent` object (see `components/case-studies/StravaCaseStudy.tsx`, the pilot). Sections: hero with outcome + final design (2+ phone screens are animated beside the title via `components/PhoneStack.tsx`) → overview → context → 3–4 key decisions → final design → (optional) reflection. Impact numbers live in the hero (`stats`), not a separate section. No "Next project" link (Diana's call).
- Keep each case study to a 3–5 minute read; image width/height must be the real pixel size so diagrams aren't cropped.
