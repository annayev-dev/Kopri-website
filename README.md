<div align="center">

# 🌐 Köpri — Web Showcase

**A bridge between languages. Offline.** ✨

[🇷🇺 Русский](#-русский) · [🇹🇲 Türkmençe](#-türkmençe) · [🇬🇧 English](#-english)

---

</div>

## 🇷🇺 Русский

<div align="center">

# 🌉 Köpri — Web Витрина

### *Мост между языками. Офлайн.* 🚀

</div>

### ✨ Что это?

Это **веб-витрина** для мобильного приложения **Köpri** — свободного офлайн-переводчика с революционным гибридным OCR, огромным разговорником и нативной скоростью на C++17.

**Сайт — одна красивая страница (index.html)** с плавными анимациями, тёмной/светлой темой и поддержкой 3 языков (русский, туркменский, английский).

---

### 🎯 Ключевые возможности

| 🎨 **Дизайн** | 📱 **Интерактивность** | 🌍 **Локализация** |
|---|---|---|
| Современный gradient UI | Плавные reveal-анимации | 3 языка (RU, TK, EN) |
| Тёмная + светлая темы | Красивый мобильный макет | i18n система на JS |
| Smooth scroll | Тильт-эффект телефона | Сохранение в localStorage |
| CSS переменные | Слайдер скриншотов | Динамический контент |

---

### 🎬 Анимации & Эффекты

✅ **Preloader** — пульсирующий логотип с прогресс-баром  
✅ **Floating blobs** — мягкие размытые формы с плавным движением  
✅ **Floating chips** — информационные бейджи вокруг телефона  
✅ **CTA shine** — сияющий градиент на кнопках  
✅ **Marquee** — бесконечная лента "Привет" на 50+ языках  
✅ **Reveal** — элементы появляются при скроллинге (Intersection Observer)  
✅ **Counter animation** — цифры считают плавно при появлении в окне  
✅ **Hero tilt** — телефон вращается под мышкой  
✅ **Scroll progress** — линия прогресса на верхней части страницы  

---

### 📂 Структура файлов

```
Kopri-website/
├── index.html          # 🎯 Единственная HTML-страница (всё здесь)
├── styles.css          # 🎨 Весь CSS с темами и анимациями
├── script.js           # ⚙️ i18n, темы, анимации, Firestore feedback
├── assets/             # 📸 Картинки, иконки, скриншоты приложения
│   ├── app_icon.png
│   ├── cover.png
│   ├── 1.jpg - 4.jpg   # Скриншоты Köpri
│   ├── Dovlet.jpg      # Фото разработчика
│   └── Aynazar.jpg     # Фото разработчика
└── README.md           # 📖 Этот файл
```

---

### 🛠️ Технологический стек

|層 | Технология | Роль |
|---|---|---|
| **HTML** | Семантический HTML5 | Структура (nav, main, footer, section) |
| **CSS** | CSS3 с переменными | Темы, макет, анимации, адаптивность |
| **JS** | Vanilla JS (ES5+) | i18n, DOM-манипуляции, Firebase |
| **CDN** | @fontsource | Manrope (400-800) + JetBrains Mono |
| **Firebase** | Firestore | Хранение отзывов пользователей |
| **Icons** | Inline SVG | Все иконки встроены |

---

### 🎨 Кастомизация

#### 1️⃣ Изменить цвета темы

Отредактируйте CSS переменные в `styles.css`:

```css
html[data-theme="dark"] {
    --accent: #5b8dee;        /* Основной акцент */
    --accent-2: #8ab4f8;      /* Вторичный акцент */
    --bg: #0b0e14;            /* Фон */
    --text: #e8edf6;          /* Текст */
}
```

#### 2️⃣ Заменить шрифты

В `index.html` замените CDN-ссылки на @fontsource:

```html
<!-- Текущие -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/manrope@latest/700.css">

<!-- Или загрузите локально -->
<link rel="stylesheet" href="fonts/manrope-700.css">
```

#### 3️⃣ Добавить текст на новый язык

В `script.js` добавьте в объект `I18N`:

```javascript
I18N.es = {
    nav_features: "Características",
    hero_title_a: "Un puente entre idiomas",
    // ... остальные ключи
};
```

Затем добавьте кнопку в HTML:

```html
<button class="lang-btn" data-lang="es">ES</button>
```

---

### 📱 Адаптивность

Сайт **полностью адаптивен**:
- 📱 **Мобильные** — hamburger-меню, стек колонок
- 💻 **Планшеты** — гибридный лейаут
- 🖥️ **Десктоп** — полный макет с тильт-эффектом

---

### 🚀 Локальный запуск

#### Python 3:
```bash
git clone https://github.com/annayev-dev/Kopri-website.git
cd Kopri-website
python -m http.server 8000
# Откройте http://localhost:8000
```

#### Node.js:
```bash
npx serve .
```

#### или просто откройте:
```bash
open index.html
```

---

### 📊 Производительность

⚠️ **Примечание**: Большие blur-фильтры и тени могут быть тяжелы на мобилях.

Рекомендуемые оптимизации:
- Уменьшить `filter: blur()` на мобилях через media queries
- Удалить некоторые `box-shadow` на низкоконцевых устройствах
- Использовать `will-change` для анимаций

---

### 🔧 Известные возможности

✅ Dark/Light theme переключение  
✅ Мультиязычность (i18n)  
✅ Firebase Firestore для отзывов  
✅ Smooth scroll + Intersection Observer  
✅ Keyboard навигация (Escape закрывает меню)  
✅ ARIA-атрибуты для a11y  

---

### 📄 Лицензия

**Apache License 2.0** — используйте свободно в своих проектах.

---

### 👥 Разработчики

🎨 **Web** — Annaýew Döwlet ([@annayev-dev](https://github.com/annayev-dev))  
📱 **Android** — Sylyýew Aýnazar ([@aynazar-sylyyew-dev](https://github.com/aynazar-sylyyew-dev))

---

<br>

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
✅ **Marquee** — çäksiz "Salam"ленты 50+ dilde  
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

### 🔧 Umuman boş ýapylan zatlary

✅ Dark/Light tema geçilmesi  
✅ Köp dilli goldawy (i18n)  
✅ Firebase Firestore teswirler üçin  
✅ Smooth scroll + Intersection Observer  
✅ Keyboard nawigasiýasy (Escape menüni ýapdyp salar)  
✅ ARIA-atributy a11y üçin  

---

### 📄 Liseziýa

**Apache License 2.0** — öz taslamalarynyzda erkin ulanyň.

---

### 👥 Döredijiler

🎨 **Web** — Annaýew Döwlet ([@annayev-dev](https://github.com/annayev-dev))  
📱 **Android** — Sylyýew Aýnazar ([@aynazar-sylyyew-dev](https://github.com/aynazar-sylyyew-dev))

---

<br>

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

[⬆ Back to top](#-köpri--web-showcase)

</div>
