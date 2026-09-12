<div align="center">

# 🌉 Köpri — Web Vitrinasy

### *Dilleriň arasyndaky köpri. Oflaýn.* 🚀

[📖 README.ru.md](./README.ru.md) · [🇹🇲 Türkmençe](#-türkmençe) · [🇬🇧 English](./README.md)

---

</div>

## 🇹🇲 Türkmençe

<div align="center">

# 🌉 Köpri — Web Vitrinasy

### *Dilleriň arasyndaky köpri. Oflaýn.* 🚀

</div>

### ✨ Bu näme?

Bu **Köpri** mobile programmasynyň **web vitrinasy** — mugt oflaýn terjimeçi: gibrid kamera OCR, 4000+ sözlem we C++17 bilen gürlemek.

**Saýty — bir ajaý sahypa (index.html)** şeňil animasiýalary, garaňky/ýagty temasy we 3 dil goldawy (rus, türkmen, iňlis).

---

### 🎯 Esasy mümkinçilikler

| 🎨 **Dizaýn** | 📱 **Interaktiwliligi** | 🌍 **Lokalizasiýa** |
|---|---|---|
| Häzirki zaman gradient UI | Şeňil reveal-animasiýalar | 3 dil (RU, TK, EN) |
| Garaňky + ýagty temalar | Ajaý mobile maketi | i18n JS sistemi |
| Smooth scroll | Telefon tilt-effekti | localStorage saklama |
| CSS değişkenleri | Screenshot slaýderi | Dinamik kontent |

---

### 🎬 Animasiýalar & Effektler

✅ **Preloader** — pulsiruşýan logotip we progress-bar  
✅ **Floating blobs** — mysk blur formalar we aňsat hereket  
✅ **Floating chips** — maglumat beýdjileri telefon töwereginde  
✅ **CTA shine** — bütün gradient düwmelerde  
✅ **Marquee** — çäksiz "Salam" lenты 50+ dilde  
✅ **Reveal** — elementler scrollda görünýär (Intersection Observer)  
✅ **Counter animation** — sanlar şeňil şölýär  
✅ **Hero tilt** — telefon syçgy aşakda aýlanardy  
✅ **Scroll progress** — ýokary çyzgy progress göskerimçisi  

---

### 📂 Faýl gurluşy

```
Kopri-website/
├── index.html          # 🎯 Bir HTML-sahypa (hemme bu ýerde)
├── styles.css          # 🎨 Bütün CSS temalar we animasiýalary
├── script.js           # ⚙️ i18n, temalar, animasiýalar, Firestore
├── assets/             # 📸 Suratlar, ikonkalar, screenshot-lar
│   ├── app_icon.png
│   ├── cover.png
│   ├── 1.jpg - 4.jpg   # Köpri screenshot-lar
│   ├── Dovlet.jpg      # Dörediji surat
│   └── Aynazar.jpg     # Dörediji surat
└── README.md           # 📖 Bu faýl
```

---

### 🛠️ Tehnologiýa stack-i

| Dereje | Tehnologiýa | Rol |
|---|---|---|
| **HTML** | Semantik HTML5 | Gurluş (nav, main, footer, section) |
| **CSS** | CSS3 değişkenleri bilen | Temalar, maket, animasiýalar, responsive |
| **JS** | Vanilla JS (ES5+) | i18n, DOM, Firebase |
| **CDN** | @fontsource | Manrope (400-800) + JetBrains Mono |
| **Firebase** | Firestore | User comment storage |
| **Icons** | Inline SVG | Bütün ikonkalar içeride |

---

### 🎨 Ykjamlaşdyryş

#### 1️⃣ Tema reňklerini üýtget

`styles.css`-de CSS değişkenlerini redaktirlediň:

```css
html[data-theme="dark"] {
    --accent: #5b8dee;        /* Esasy reňk */
    --accent-2: #8ab4f8;      /* Ikinji reňk */
    --bg: #0b0e14;            /* Fon */
    --text: #e8edf6;          /* Tekst */
}
```

#### 2️⃣ Şrift üýtget

`index.html`-de @fontsource CDN-ni üýtget:

```html
<!-- Häzirki -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/manrope@latest/700.css">

<!-- Ýa-da ýerli ýükle -->
<link rel="stylesheet" href="fonts/manrope-700.css">
```

#### 3️⃣ Täze dil goş

`script.js`-de `I18N` objetkine:

```javascript
I18N.tk = {
    nav_features: "Mümkinçilikler",
    hero_title_a: "Dilleriň arasyndaky köpri",
    // ... beýleki açarlar
};
```

HTML-de:

```html
<button class="lang-btn" data-lang="tk">TK</button>
```

---

### 📱 Responsive Dizaýn

Saýty **doly adaptive**:
- 📱 **Mobil** — hamburger-menü, staklar
- 💻 **Tablet** — gibrid layout
- 🖥️ **Desktop** — doly tilt-effekt

---

### 🚀 Ýerli başla

#### Python 3:
```bash
git clone https://github.com/annayev-dev/Kopri-website.git
cd Kopri-website
python -m http.server 8000
# http://localhost:8000 aç
```

#### Node.js:
```bash
npx serve .
```

#### ýa-da açyň:
```bash
open index.html
```

---

### 📊 Işiň tizligi

⚠️ **Bellemeleme**: Uly blur-filtrleri we sölkemeler mobil enjamda agyr bolup biler.

Optimizasiýa maslahatlar:
- Mobile media queries-de blur azaldyň
- Çäk enjamda shadow azaldyň
- Animasiýalar üçin `will-change` ulanyň

---

### ✅ Hemme zatlary amala aşyrmak

✅ Dark/Light tema geçilmesi  
✅ Köp dilli goldawy (i18n)  
✅ Firebase Firestore teswirler üçin  
✅ Smooth scroll + Intersection Observer  
✅ Keyboard nawigasiýasy (Escape menüni ýapdyp salar)  
✅ ARIA-atributy a11y üçin  
✅ Avtomatic screenshot carousel  
✅ Copy-to-clipboard düwmeleri  

---

### 📄 Liseziýa

**Apache License 2.0** — öz taslamalarynyzda erkin ulanyň.

---

### 👥 Döredijiler

🎨 **Web** — Annaýew Döwlet ([@annayev-dev](https://github.com/annayev-dev))  
📱 **Android** — Sylyýew Aýnazar ([@aynazar-sylyyew-dev](https://github.com/aynazar-sylyyew-dev))

---

<br>

<div align="center">

### 🌟 ❤️, Flutter we C++ bilen ýasaldy

**Dilleriň arasyndaky köpri. Oflaýn. Hemişelik.**

[🇷🇺 Русский](./README.ru.md) · [🇹🇲 Türkmençe](#-türkmençe) · [🇬🇧 English](./README.md)

</div>