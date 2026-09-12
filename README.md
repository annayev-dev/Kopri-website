<div align="center">

# 🌉 Köpri — Web Showcase

**A bridge between languages. Offline.** ✨

[📖 README.md](#-english) · [🇷🇺 Русский →](./README.ru.md) · [🇹🇲 Türkmençe →](./README.tk.md)

---

</div>

## 🇬🇧 English

<div align="center">

# 🌉 Köpri — Web Showcase

### *A bridge between languages. Offline.* 🚀

</div>

### ✨ What's this?

This is the **web showcase** for **Köpri** — a free offline-first translator with hybrid camera OCR, a massive 4000+ phrasebook, and blazing-fast C++17 native modules.

**The site is one beautiful page (index.html)** with smooth animations, dark/light theme toggle, and full support for 3 languages (Russian, Turkmen, English).

---

### 🎯 Key Features

| 🎨 **Design** | 📱 **Interactivity** | 🌍 **Localization** |
|---|---|---|
| Modern gradient UI | Smooth reveal animations | 3 languages (RU, TK, EN) |
| Dark + Light themes | Beautiful phone mockup | i18n system in JS |
| Smooth scroll | Phone tilt effect | localStorage persistence |
| CSS variables | Screenshot slider | Dynamic content |

---

### 🎬 Animations & Effects

✅ **Preloader** — pulsing logo + sliding progress bar  
✅ **Floating blobs** — soft blurred shapes drifting smoothly  
✅ **Floating chips** — info badges orbiting the phone  
✅ **CTA shine** — gleaming gradient sweep across buttons  
✅ **Marquee** — infinite scrolling "Hello" band in 50+ languages  
✅ **Reveal** — elements fade in on scroll (Intersection Observer)  
✅ **Counter animation** — numbers count up smoothly  
✅ **Hero tilt** — phone rotates under your mouse  
✅ **Scroll progress** — top progress line follows your scroll  

---

### 📂 File Structure

```
Kopri-website/
├── index.html          # 🎯 Single HTML page (everything here)
├── styles.css          # 🎨 All CSS with themes & animations
├── script.js           # ⚙️ i18n, themes, animations, Firestore
├── assets/             # 📸 Images, icons, app screenshots
│   ├── app_icon.png
│   ├── cover.png
│   ├── 1.jpg - 4.jpg   # Köpri app screenshots
│   ├── Dovlet.jpg      # Developer avatar
│   └── Aynazar.jpg     # Developer avatar
└── README.md           # 📖 This file
```

---

### 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **HTML** | Semantic HTML5 | Structure (nav, main, footer, sections) |
| **CSS** | CSS3 with variables | Themes, layout, animations, responsiveness |
| **JS** | Vanilla JS (ES5+) | i18n, DOM manipulation, Firebase |
| **CDN** | @fontsource | Manrope (400-800 weights) + JetBrains Mono |
| **Firebase** | Firestore | User feedback storage |
| **Icons** | Inline SVG | All icons embedded |

---

### 🎨 Customization

#### 1️⃣ Change Theme Colors

Edit CSS variables in `styles.css`:

```css
html[data-theme="dark"] {
    --accent: #5b8dee;        /* Primary accent */
    --accent-2: #8ab4f8;      /* Secondary accent */
    --bg: #0b0e14;            /* Background */
    --text: #e8edf6;          /* Text color */
}
```

#### 2️⃣ Replace Fonts

Swap @fontsource CDN links in `index.html`:

```html
<!-- Current -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/manrope@latest/700.css">

<!-- Or load locally -->
<link rel="stylesheet" href="fonts/manrope-700.css">
```

#### 3️⃣ Add a New Language

Add a new language to the `I18N` object in `script.js`:

```javascript
I18N.es = {
    nav_features: "Características",
    hero_title_a: "Un puente entre idiomas",
    // ... all other keys
};
```

Then add the button in HTML:

```html
<button class="lang-btn" data-lang="es">ES</button>
```

---

### 📱 Responsiveness

The site is **fully adaptive**:
- 📱 **Mobile** — hamburger menu, stacked columns
- 💻 **Tablet** — hybrid layout
- 🖥️ **Desktop** — full experience with tilt effect

---

### 🚀 Local Preview

#### Python 3:
```bash
git clone https://github.com/annayev-dev/Kopri-website.git
cd Kopri-website
python -m http.server 8000
# Open http://localhost:8000
```

#### Node.js:
```bash
npx serve .
```

#### Or just open:
```bash
open index.html
```

---

### 📊 Performance Notes

⚠️ **Note**: Large blur filters and heavy shadows can be expensive on mobile devices.

Recommended optimizations:
- Reduce `filter: blur()` on mobile via media queries
- Remove some `box-shadow` on low-end devices
- Use `will-change` for animated elements

---

### ✅ Features Implemented

✅ Dark/Light theme toggle  
✅ Multilingual support (i18n)  
✅ Firebase Firestore for user feedback  
✅ Smooth scroll + Intersection Observer  
✅ Keyboard navigation (Escape closes menu)  
✅ ARIA attributes for a11y  
✅ Automatic screenshot carousel  
✅ Copy-to-clipboard buttons  

---

### 📄 License

**Apache License 2.0** — feel free to use in your projects.

---

### 👥 Developers

🎨 **Web** — Annaýew Döwlet ([@annayev-dev](https://github.com/annayev-dev))  
📱 **Android** — Sylyýew Aýnazar ([@aynazar-sylyyew-dev](https://github.com/aynazar-sylyyew-dev))

---

<br>

<div align="center">

### 🌟 Made with ❤️, Flutter and C++

**A bridge between languages. Offline. Forever.**

[🇷🇺 Русский](./README.ru.md) · [🇹🇲 Türkmençe](./README.tk.md) · [🇬🇧 English](#-english)

</div>