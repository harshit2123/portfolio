# Harshit Yadav — Personal Portfolio

One-page personal portfolio website. Plain HTML/CSS/JS (no build step, no framework). Files:
- `index.html` — markup only
- `css/styles.css` — all styles, design tokens on `:root`
- `js/main.js` — content (`SOCIALS`, `STOPS`) plus rendering and interaction logic
Open `index.html` in a browser to preview. Deploy to Vercel / Netlify / GitHub Pages as a static site.

## Owner
- Harshit Yadav — AI Full-Stack Engineer, Bengaluru
- Software Developer @ UNIQODE (Aug 2025–now), intern there Feb–Jul 2025
- B.Tech EEE, NIT Bhopal (2021–2025, 8.0 CGPA)
- LinkedIn: https://www.linkedin.com/in/harshit2123/
- GitHub: https://github.com/harshit2123

## Design decisions (agreed so far)
- Concept: vertical "life flow" roadmap on graph-paper background. A hand-drawn pencil SVG line wiggles
  down the middle connecting every stop and circled year; cards alternate left/right (stack on left on mobile).
- Minimal words up front: each card shows only date, type, title and ONE short line (<~8 words).
  Click/tap expands to reveal details, screenshot frame, stack and links. A hand-drawn "+" rotates to "×".
  NO "show more" text buttons. The current role starts expanded.
- Font feel: "writing with a pencil" — Kalam (handwriting) for headings, titles, links, notes;
  IBM Plex Sans for readable body text; IBM Plex Mono for dates/stack lines.
- Sketchy hand-drawn borders (irregular border-radius), slight card tilt, offset pencil shadow,
  taped polaroid photo frame, highlighter marks for type labels (project = blue, job = yellow, milestone = pink).
- Colors: blue graph paper + graphite ink. User does NOT like greenish/earthy tones.
  No purple gradients, no glows, no random lights. Light + dark themes via CSS tokens on :root.
- Must look human-made, not AI slop. Avoid: Inter font, uneven selected states, cramped all-caps eyebrows,
  random status chips, glows/gradients, Lucide-default look, generic card grids, emoji section markers.
  (From the "Signs your vibe-coded project looks like AI slop" video: use references/design system,
  learn names of visual problems, even spacing, real images instead of illustrations, one contrasting section.)

## Where to edit content
All content lives at the top of `js/main.js`:
- `SOCIALS` — social links (X / LeetCode are commented out, fill in handles)
- `STOPS` — timeline entries: {year, type: project|work|milestone, when, title, short, text|bullets,
  stack, links, feat (shows screenshot frame), images (list of paths in `images/`), url, note (handwritten margin note, keep rare), now}
- Pictures live in `images/`. Profile photo is `images/profile.png` (hero in index.html).

## TODO (placeholders still in the page)
- Photo: replace the "HY" placeholder in `.photo` with <img src="me.jpg">
- Screenshots/GIFs (16:9) for featured projects: set `image:` on each STOP
- Resume link currently points to LinkedIn — swap for resume PDF
- Exact live/GitHub URLs for Whiteboard, Spud, Object counter, LLM observability, AI coding helper
