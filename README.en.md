# Köpri — Web Showcase (English)

**Short:** This repository contains the marketing single-page website for the Köpri mobile app. It is a lightweight, animated, font-rich landing page (index.html).

---

Centered typography: Manrope & JetBrains Mono · Dark/Light theme · Rich CSS animations


## Quick summary

The repo's index.html includes:

- A bold hero section (gradient headings, CTAs)
- Phone mockup showcase (perspective, glow, floating chips)
- Preloader, blobs, float & pulse animations
- Dark / light theme support via `html[data-theme]`
- Fonts loaded from CDN: Manrope (various weights) and JetBrains Mono

---

## Visuals & typography

- Fonts are linked in the page head using @fontsource CDN for Manrope and JetBrains Mono.
- Add demo GIFs or screenshots into `assets/` (e.g. `assets/demo.gif`, `assets/screenshot-hero.png`) to show visuals in README.

---

## Animations (summary)

- Preloader with pulsing logo and sliding load bar
- Blobs: soft blurred shapes moving in the background
- Floating chips: information badges around the phone mockup
- CTA shine: skewed white gradient that sweeps across primary buttons
- Marquee: auto-scrolling text band (pauses on hover)

Note: large blur filters and heavy box-shadows can be expensive on mobile — consider reducing them for better performance.

---

## Local preview

1. Clone the repository:

   git clone https://github.com/annayev-dev/Kopri-website.git
   cd Kopri-website

2. Start a simple static server:

   # Python 3
   python -m http.server 8000

   # or
   npx serve .

3. Open http://localhost:8000/index.html

---

## Customization tips

- Change theme colors by editing CSS variables in `:root` (e.g. `--accent`, `--accent-2`, `--bg`).
- Replace fonts by editing the font links in the page head.
- For accessibility, add `prefers-reduced-motion` media queries to reduce animation intensity.
- To modularize, move CSS to `styles.css` and JS to `app.js` and import them from index.html.

---

## File structure (short)

- `index.html` — single page with inline CSS and small JS
- `assets/` — images, icons, and demo GIFs

---

## License

If you want a license added (MIT, Apache-2.0, etc.), tell me and I will add it and link it from the README.

---

If you want, I can also:

- Add badges, font preview samples, and a live demo link
- Make a bilingual README combining TR/EN
- Produce small GIFs for the hero/animations and attach them

