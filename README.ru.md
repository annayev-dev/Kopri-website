<div align="center">

# 🌉 Köpri — Web Витрина

### *Мост между языками. Офлайн.* 🚀

[🇷🇺 Русский](#-русский) · [🇹🇲 Türkmençe](./README.tk.md) · [🇬🇧 English](./README.md)

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
├── script.js           # ⚙️ i18n, темы, анимации, Firestore
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

| Слой | Технология | Роль |
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

### 🔧 Реализованные возможности

✅ Dark/Light theme переключение  
✅ Мультиязычность (i18n)  
✅ Firebase Firestore для отзывов  
✅ Smooth scroll + Intersection Observer  
✅ Keyboard навигация (Escape закрывает меню)  
✅ ARIA-атрибуты для a11y  
✅ Автоматический слайдер скриншотов  
✅ Кнопки "Копировать в буфер обмена"  

---

### 📄 Лицензия

**Apache License 2.0** — используйте свободно в своих проектах.

---

### 👥 Разработчики

🎨 **Web** — Annaýew Döwlet ([@annayev-dev](https://github.com/annayev-dev))  
📱 **Android** — Sylyýew Aýnazar ([@aynazar-sylyyew-dev](https://github.com/aynazar-sylyyew-dev))

---

<br>

<div align="center">

### 🌟 Сделано с ❤️, Flutter и C++

**Мост между языками. Офлайн. Навсегда.**

[🇷🇺 Русский](#-русский) · [🇹🇲 Türkmençe](./README.tk.md) · [🇬🇧 English](./README.md)

</div>