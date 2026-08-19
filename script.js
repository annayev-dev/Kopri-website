const firebaseConfig = {
apiKey: "AIzaSyBzoy395WFSex-l01iq3lZ2DZAdjb9b92c",
authDomain: "kopri-app-6106f.firebaseapp.com",
projectId: "kopri-app-6106f",
storageBucket: "kopri-app-6106f.firebasestorage.app",
messagingSenderId: "581054889176",
appId: "1:581054889176:web:935605e563e5137f19ebad"
};

window.kopriFirebaseReady = false;
window.kopriDb = null;

const hasRealFirebaseConfig = Object.values(firebaseConfig).every(function (value) {
    return value && !String(value).startsWith('PASTE_') && !String(value).startsWith('YOUR_');
});

if (window.firebase && firebase.apps && firebase.apps.length === 0 && hasRealFirebaseConfig) {
    firebase.initializeApp(firebaseConfig);

    if (firebase.firestore) {
        window.kopriDb = firebase.firestore();
        window.kopriFirebaseReady = true;
    }
}

(function () {
    'use strict';
    /* ================= I18N ================= */
    var I18N = {
        ru: {
            nav_features: "Возможности", nav_ocr: "Hybrid OCR", nav_screens: "Скриншоты", nav_tech: "Технологии", nav_team: "Команда", nav_faq: "FAQ", nav_download: "Скачать",
            hero_badge_offline: "Работает полностью офлайн", hero_badge_open: "Открытый код · Apache 2.0",
            hero_title_a: "Мост между языками", hero_title_b: "— в твоём кармане",
            hero_sub: "Köpri — бесплатный офлайн-переводчик с гибридной камерой OCR, огромным разговорником и мгновенным переводом текста. Без интернета. Без облака. Без границ.",
            hero_cta_apk: "Скачать APK", hero_cta_features: "Возможности", hero_chip_offline: "100% офлайн",
            stat_langs: "языков", stat_phrases: "фраз в разговорнике", stat_models: "OCR-моделей", stat_speed: "секунды на распознавание", stat_pkgs: "открытых пакетов внутри", stat_fast: "× быстрее с C++17",
            features_eyebrow: "Возможности", features_title: "Всё, что нужно переводчику", features_sub: "Девять суперсил Köpri — и все работают без интернета.",
            f1_title: "Камера-перевод (Hybrid OCR)", f1_text: "Наведи камеру — Google ML Kit распознаёт латиницу за ~0.3 с, а Tesseract подхватывает кириллицу, арабицу, CJK и деванагари.",
            f2_title: "Текст-текст", f2_text: "Мгновенный перевод между 50+ языками.",
            f3_title: "Огромный разговорник", f3_text: "Тысячи фраз в десятках категорий и подкатегорий.",
            f4_title: "Полностью офлайн", f4_text: "Интернет не нужен — данные никогда не покидают устройство.",
            f5_title: "История", f5_text: "Все переводы сохраняются локально.",
            f6_title: "Избранное", f6_text: "Сохраняй фразы, которые используешь часто.",
            f7_title: "Современный UI", f7_text: "Чистый дизайн с поддержкой тёмной темы.",
            f8_title: "Профиль и статистика", f8_text: "XP, уровни, серии дней и цели — следи за прогрессом.",
            f9_title: "Нативная скорость", f9_text: "Тяжёлые вычисления — в C++17 через FFI: в 10–60 раз быстрее чистого Dart.",
            ocr_title: "Почему гибридный OCR?", ocr_text: "ML Kit в 10–20 раз быстрее на латинице — вывески, меню, документы. Tesseract закрывает письменности, которые ML Kit пока не поддерживает: кириллицу, арабицу, деванагари.",
            ocr_ml_sub: "Латиница · ~0.3 с · на устройстве", ocr_tes_sub: "Кириллица · Арабица · CJK · Деванагари",
            ocr_scripts_label: "Поддерживаемые письменности", ocr_speed_label: "Скорость распознавания",
            ocr_note: "Одна загрузка моделей — и перевод работает офлайн навсегда.",
            demo_eyebrow: "Демо", demo_title: "Попробуй прямо сейчас", demo_sub: "Мини-демо: выбери фразу и язык — Köpri переведёт мгновенно.",
            demo_target_label: "Язык перевода", demo_btn: "Перевести", demo_result_hint: "Результат появится здесь…",
            pb_eyebrow: "Разговорник", pb_title: "4000+ фраз на все случаи жизни", pb_sub: "От приветствий до ресторана и путешествий.",
            cat1: "Приветствия и знакомство", cat2: "Вежливость и извинения", cat3: "Семья", cat4: "В ресторане", cat5: "Напитки", cat6: "Путешествия", cat7: "Покупки", cat8: "Чрезвычайные ситуации",
            gm_eyebrow: "Профиль", gm_title: "Учись играя", gm_sub: "XP, серии и цели превращают переводы в полезную привычку.",
            gm_level: "Уровень 7 · Энтузиаст", gm_xp_sub: "до уровня 8", gm_streak: "12 дней", gm_streak_sub: "Серия растёт — так держать!", gm_record: "Рекорд: 21 день", gm_goal: "Ежедневная цель",
            gm_cpp: "Вся математика XP и серий считается в <b>C++</b> — мгновенно.",
            sc_eyebrow: "Скриншоты", sc_title: "Посмотри внутри", sc_sub: "Тёмная и светлая темы — стиль, который хочется листать.",
            sc_cap1: "Настройки", sc_cap2: "Лицензии", sc_cap3: "Профиль", sc_cap4: "Разговорник",
            ts_eyebrow: "Технологии", ts_title: "Построен на надёжном стеке", ts_sub: "Технологии, которым доверяют миллионы разработчиков.",
            ts_role_framework: "Фреймворк", ts_role_lang: "Язык", ts_role_native: "Нативное ядро", ts_role_ocr1: "OCR · латиница", ts_role_ocr2: "OCR · остальные письменности", ts_role_cam: "Камера", ts_role_store: "Хранилище", ts_role_arch: "Архитектура",
            nt_title: "Нативные модули скорости", nt_sub: "Всё, что считает — считает C++.",
            m_xp: "XP, уровни, прогресс — в 20× быстрее Dart", m_streak: "Серии дней по алгоритму Hinnant", m_stats: "Недельные графики O(n), пиковый час, топ фраз", m_json: "Ручной рекурсивный JSON-парсер", m_csv: "Нативный JSON→CSV для экспорта", m_img: "Мгновенный ресайз аватара (stb_image)", m_tr: "Детект письменности, парсинг, чанкинг", m_ffi: "Мост FFI между Dart и native",
            pv_eyebrow: "Приватность", pv_title: "Твои данные — только твои", pv_text: "Köpri работает без серверов. Переводы, история и профиль хранятся локально и никогда не отправляются в сеть.",
            pv_b1: "Без интернета", pv_b2: "Без облака", pv_b3: "Без слежки",
            st_eyebrow: "Разработчикам", st_title: "Собери за 5 минут", st_sub: "Открытый код — собирай и изучай.",
            st1: "Клонируй репозиторий", st2: "Установи зависимости", st3: "Собери APK", copy_btn: "Копировать", copy_done: "Скопировано!",
            tm_eyebrow: "Команда", tm_title: "Создатели Köpri", tm_sub: "Два человека. Один мост. Миллионы переведённых слов.",
            tm_role_web: "Web-разработчик", tm_role_android: "Android-разработчик",
            tm_web_note: "Дизайн и веб этого сайта", tm_android_note: "Автор приложения Köpri",
            faq_title: "Частые вопросы",
            q1: "Köpri действительно работает без интернета?", a1: "Да. Модели перевода и OCR загружаются один раз, после чего всё работает офлайн — даже Wi-Fi не нужен.",
            q2: "Какие языки поддерживаются?", a2: "Английский, русский, туркменский, турецкий, казахский, узбекский, украинский, китайский, японский, корейский, арабский, немецкий, французский, испанский, хинди и другие — всего 50+.",
            q3: "Это бесплатно?", a3: "Полностью. Köpri — открытый исходный код под лицензией Apache 2.0.",
            q4: "Как работает гибридный OCR?", a4: "Латиницу распознаёт Google ML Kit (~0.3 с), а кириллицу, арабицу, CJK и деванагари — Tesseract.",
            q5: "Кто создал Köpri?", a5: "Android-разработчик — Sylyýew Aýnazar, веб — Annaýew Döwlet.",
            q6: "Мои данные в безопасности?", a6: "Да: всё хранится локально на устройстве и никогда не отправляется в сеть.",
            fb_eyebrow: "Отзывы", fb_title: "Оставьте свой комментарий", fb_sub: "Расскажите, что вам нравится, и что можно улучшить в Köpri.", fb_name: "Имя", fb_email: "Email (необязательно)", fb_message: "Комментарий", fb_submit: "Отправить", fb_success: "Спасибо! Ваш отзыв отправлен.", fb_error: "Сначала подключите Firebase и заполните реальные ключи проекта.", fb_recent: "Последние комментарии", fb_empty: "Пока нет комментариев.", fb_author: "Автор", fb_email_label: "Email", fb_comment: "Комментарий", fb_name_placeholder: "Ваше имя", fb_email_placeholder: "name@example.com", fb_message_placeholder: "Напишите ваш отзыв...",
            cta_title: "Готов перекинуть мост между языками?", cta_sub: "Скачай Köpri бесплатно — и переводи без границ.", cta_btn1: "Скачать APK", cta_btn2: "Star on GitHub", cta_note: "Бесплатно · Открытый код · Навсегда",
            ft_tag: "Мост между языками. Офлайн.", ft_made: "Сделано с ❤️, Flutter и C++"
        },
        tk: {
            nav_features: "Mümkinçilikler", nav_ocr: "Hybrid OCR", nav_screens: "Ekran suratlary", nav_tech: "Tehnologiýalar", nav_team: "Topar", nav_faq: "Sorag-jogap", nav_download: "Göçürip al",
            hero_badge_offline: "Doly oflaýn işleýär", hero_badge_open: "Açyk çeşme · Apache 2.0",
            hero_title_a: "Dilleriň arasyndaky köpri", hero_title_b: "— jebiňde",
            hero_sub: "Köpri — mugt oflaýn terjimeçi: gibrid kamera OCR, ägirt uly sözleşme kitaby we bada-bat tekst terjimesi. Internetsiz. Bulutsyz. Çäksiz.",
            hero_cta_apk: "APK göçürip al", hero_cta_features: "Mümkinçilikler", hero_chip_offline: "100% oflaýn",
            stat_langs: "dil", stat_phrases: "sözlem sözleşme kitabynda", stat_models: "OCR modeli", stat_speed: "sekuntda tanaýar", stat_pkgs: "açyk paket içeride", stat_fast: "× çalt C++17 bilen",
            features_eyebrow: "Mümkinçilikler", features_title: "Terjimeçi üçin gerek bolan hemme zat", features_sub: "Köpri-iň dokuz güýji — hemmesi internetsiz işleýär.",
            f1_title: "Kamera terjimesi (Hybrid OCR)", f1_text: "Kameraňy gönükdir — Google ML Kit latyn ýazuwyny ~0.3 s-da tanaýar, Tesseract kiril, arap, CJK we dewanagari ýazuwlaryny okaýar.",
            f2_title: "Tekst terjimesi", f2_text: "50+ diliň arasynda bada-bat terjime.",
            f3_title: "Ägirt sözleşme kitaby", f3_text: "Onlarça kategoriýada müňlerçe sözlem.",
            f4_title: "Doly oflaýn", f4_text: "Internet gerek däl — maglumatlar telefondan çykmaýar.",
            f5_title: "Taryh", f5_text: "Ähli terjimeler ýerde saklanýar.",
            f6_title: "Saýlananlar", f6_text: "Ýygy ulanýan sözlemleriňi sakla.",
            f7_title: "Häzirki zaman UI", f7_text: "Arassa dizaýn, garaňky tema goldawy.",
            f8_title: "Profil we statistika", f8_text: "XP, derejeler, seriýalar we maksatlar — ösüşiňi yzarla.",
            f9_title: "Natiw tizlik", f9_text: "Agyr hasaplamalar C++17 + FFI arkaly: arassa Dart-dan 10–60× çalt.",
            ocr_title: "Näme üçin gibrid OCR?", ocr_text: "ML Kit latyn ýazuwynda 10–20× çalt — ýazgylar, menýu, resminamalar. Tesseract ML Kit-iň goldamaýan ýazuwlaryny ýapýar: kiril, arap, dewanagari.",
            ocr_ml_sub: "Latyn ýazuwy · ~0.3 s · enjamda", ocr_tes_sub: "Kiril · Arap · CJK · Dewanagari",
            ocr_scripts_label: "Goldanylýan ýazuwlar", ocr_speed_label: "Tanyş tizligi",
            ocr_note: "Modeller bir gezek ýüklenýär — terjime hemişelik oflaýn işleýär.",
            demo_eyebrow: "Demo", demo_title: "Şu wagt synap gör", demo_sub: "Kiçi demo: sözlemi we dili saýla — Köpri bada-bat terjime eder.",
            demo_target_label: "Terjime dili", demo_btn: "Terjime et", demo_result_hint: "Netije şu ýerde görner…",
            pb_eyebrow: "Sözleşme kitaby", pb_title: "Ähli ýagdaýlar üçin 4000+ sözlem", pb_sub: "Salamlaşmadan restorana we syýahata çenli.",
            cat1: "Salamlaşma we tanyşlyk", cat2: "Edep we ötüňç", cat3: "Maşgala", cat4: "Restoranda", cat5: "Içgiler", cat6: "Syýahat", cat7: "Söwda", cat8: "Adatdan daşary ýagdaýlar",
            gm_eyebrow: "Profil", gm_title: "Oýnap öwren", gm_sub: "XP, seriýalar we maksatlar terjimäni peýdaly endige öwürýär.",
            gm_level: "Dereje 7 · Höwesjeň", gm_xp_sub: "8-nji derejä çenli", gm_streak: "12 gün", gm_streak_sub: "Seriýa ösýär — şeýle dowam et!", gm_record: "Rekord: 21 gün", gm_goal: "Gündelik maksat",
            gm_cpp: "XP we seriýa hasaplamalarynyň hemmesi <b>C++</b>-da — bada-bat.",
            sc_eyebrow: "Ekran suratlary", sc_title: "Içine seret", sc_sub: "Garaňky we ýagty temalar — listaýasyň gelýän dizaýn.",
            sc_cap1: "Sazlamalar", sc_cap2: "Rugsatnamalar", sc_cap3: "Profil", sc_cap4: "Sözleşme kitaby",
            ts_eyebrow: "Tehnologiýalar", ts_title: "Ygtybarly tehnologiýalar bilen gurlan", ts_sub: "Millionlarça öndürijiniň ynanýan tehnologiýalary.",
            ts_role_framework: "Freýmwork", ts_role_lang: "Dil", ts_role_native: "Natiw ýadro", ts_role_ocr1: "OCR · latyn", ts_role_ocr2: "OCR · beýleki ýazuwlar", ts_role_cam: "Kamera", ts_role_store: "Ammar", ts_role_arch: "Arhitektura",
            nt_title: "Tizlik üçin natiw modullar", nt_sub: "Hasaplaýan zatlaryň hemmesi C++.",
            m_xp: "XP, derejeler, ösüş — Dart-dan 20× çalt", m_streak: "Hinnant algoritmi bilen seriýalar", m_stats: "Hepdelik grafikler O(n), iň ýygy sagat, top sözlemler", m_json: "El bilen ýazylan rekursiw JSON parser", m_csv: "Eksport üçin natiw JSON→CSV", m_img: "Bada-bat avatar ölçeg üýtgetme (stb_image)", m_tr: "Ýazuw tanaýyş, parsing, chunking", m_ffi: "Dart bilen natiw arasynda FFI köpri",
            pv_eyebrow: "Gizlinlik", pv_title: "Maglumatlaryň — diňe seniňki", pv_text: "Köpri serversiz işleýär. Terjimeler, taryh we profil ýerde saklanýar we hiç haçan tora iberilmeýär.",
            pv_b1: "Internetsiz", pv_b2: "Bulutsyz", pv_b3: "Yzarlanmasyz",
            st_eyebrow: "Öndürijilere", st_title: "5 minutda gur", st_sub: "Açyk çeşme — gur we öwren.",
            st1: "Repositoriýany göçür", st2: "Baglylyklary gur", st3: "APK gur", copy_btn: "Göçür", copy_done: "Göçürildi!",
            tm_eyebrow: "Topar", tm_title: "Köpri-iň döredijileri", tm_sub: "Iki adam. Bir köpri. Millionlarça terjime edilen söz.",
            tm_role_web: "Web öndürijisi", tm_role_android: "Android öndürijisi",
            tm_web_note: "Şu sahypanyň dizaýny we web-i", tm_android_note: "Köpri programmasynyň awtory",
            faq_title: "Ýygy soralýan soraglar",
            q1: "Köpri hakykatdanam internetsiz işleýärmi?", a1: "Hawa. Terjime we OCR modelleri bir gezek ýüklenýär, soňra hemme zat oflaýn işleýär — Wi-Fi hem gerek däl.",
            q2: "Haýsy diller goldanylýar?", a2: "Iňlis, rus, türkmen, türk, gazak, özbek, ukrain, hytaý, ýapon, koreý, arap, nemes, fransuz, ispan, hindi we beýlekiler — jemi 50+.",
            q3: "Bu mugtmy?", a3: "Doly mugt. Köpri — Apache 2.0 lisenziýaly açyk çeşme.",
            q4: "Gibrid OCR nädip işleýär?", a4: "Latyn ýazuwyny Google ML Kit (~0.3 s), kiril, arap, CJK we dewanagari ýazuwlaryny Tesseract tanaýar.",
            q5: "Köpri-i kim döretdi?", a5: "Android öndürijisi — Sylyýew Aýnazar, web — Annaýew Döwlet.",
            q6: "Maglumatlarym howpsuzmy?", a6: "Hawa: hemme zat enjamda ýerde saklanýar we hiç haçan tora iberilmeýär.",
            cta_title: "Dilleriň arasynda köpri gurmagaga taýýarmy?", cta_sub: "Köpri-i mugt göçürip al — çäksiz terjime et.", cta_btn1: "APK göçürip al", cta_btn2: "Star on GitHub", cta_note: "Mugt · Açyk çeşme · Hemişelik",
            ft_tag: "Dilleriň arasyndaky köpri. Oflaýn.", ft_made: "❤️, Flutter we C++ bilen ýasaldy"
        },
        en: {
            nav_features: "Features", nav_ocr: "Hybrid OCR", nav_screens: "Screenshots", nav_tech: "Tech stack", nav_team: "Team", nav_faq: "FAQ", nav_download: "Download",
            hero_badge_offline: "Fully offline", hero_badge_open: "Open source · Apache 2.0",
            hero_title_a: "A bridge between languages", hero_title_b: "— in your pocket",
            hero_sub: "Köpri is a free offline-first translator with hybrid camera OCR, a huge phrasebook and instant text-to-text translation. No internet. No cloud. No borders.",
            hero_cta_apk: "Download APK", hero_cta_features: "Features", hero_chip_offline: "100% offline",
            stat_langs: "languages", stat_phrases: "phrases in phrasebook", stat_models: "OCR models", stat_speed: "seconds to recognize text", stat_pkgs: "open-source packages inside", stat_fast: "× faster with C++17",
            features_eyebrow: "Features", features_title: "Everything a translator needs", features_sub: "Nine superpowers of Köpri — all working without internet.",
            f1_title: "Camera translation (Hybrid OCR)", f1_text: "Point your camera — Google ML Kit reads Latin scripts in ~0.3s while Tesseract covers Cyrillic, Arabic, CJK and Devanagari.",
            f2_title: "Text-to-text", f2_text: "Instant translation between 50+ languages.",
            f3_title: "Huge phrasebook", f3_text: "Thousands of phrases in dozens of categories and subcategories.",
            f4_title: "Fully offline", f4_text: "No internet required — your data never leaves the device.",
            f5_title: "History", f5_text: "All translations are saved locally.",
            f6_title: "Favorites", f6_text: "Save the phrases you use often.",
            f7_title: "Modern UI", f7_text: "Clean design with dark mode support.",
            f8_title: "Profile & stats", f8_text: "XP, levels, streaks and daily goals — track your progress.",
            f9_title: "Native performance", f9_text: "Heavy compute runs in C++17 via FFI — 10–60× faster than pure Dart.",
            ocr_title: "Why hybrid OCR?", ocr_text: "ML Kit is 10–20× faster on Latin scripts — signs, menus, documents. Tesseract covers the scripts ML Kit doesn't support yet: Cyrillic, Arabic, Devanagari.",
            ocr_ml_sub: "Latin scripts · ~0.3s · on-device", ocr_tes_sub: "Cyrillic · Arabic · CJK · Devanagari",
            ocr_scripts_label: "Supported scripts", ocr_speed_label: "Recognition speed",
            ocr_note: "Download the models once — translation works offline forever.",
            demo_eyebrow: "Demo", demo_title: "Try it right now", demo_sub: "A mini demo: pick a phrase and a language — Köpri translates instantly.",
            demo_target_label: "Target language", demo_btn: "Translate", demo_result_hint: "The result will appear here…",
            pb_eyebrow: "Phrasebook", pb_title: "4000+ phrases for every situation", pb_sub: "From greetings to restaurants and travel.",
            cat1: "Greetings & introductions", cat2: "Politeness & apologies", cat3: "Family", cat4: "At the restaurant", cat5: "Drinks", cat6: "Travel", cat7: "Shopping", cat8: "Emergencies",
            gm_eyebrow: "Profile", gm_title: "Learn while playing", gm_sub: "XP, streaks and goals turn translating into a useful habit.",
            gm_level: "Level 7 · Enthusiast", gm_xp_sub: "to level 8", gm_streak: "12 days", gm_streak_sub: "Your streak is growing — keep it up!", gm_record: "Record: 21 days", gm_goal: "Daily goal",
            gm_cpp: "All XP and streak math runs in <b>C++</b> — instantly.",
            sc_eyebrow: "Screenshots", sc_title: "Take a look inside", sc_sub: "Dark and light themes — a design you'll love to scroll.",
            sc_cap1: "Settings", sc_cap2: "Licenses", sc_cap3: "Profile", sc_cap4: "Phrasebook",
            ts_eyebrow: "Tech stack", ts_title: "Built on a solid stack", ts_sub: "Technologies trusted by millions of developers.",
            ts_role_framework: "Framework", ts_role_lang: "Language", ts_role_native: "Native core", ts_role_ocr1: "OCR · Latin", ts_role_ocr2: "OCR · other scripts", ts_role_cam: "Camera", ts_role_store: "Storage", ts_role_arch: "Architecture",
            nt_title: "Native speed modules", nt_sub: "Everything that computes, computes in C++.",
            m_xp: "XP, levels, progress — 20× faster than Dart", m_streak: "Streaks via Hinnant's civil days algorithm", m_stats: "Weekly charts O(n), peak hour, top phrases", m_json: "Hand-written recursive JSON parser", m_csv: "Native JSON→CSV export", m_img: "Instant avatar resize (stb_image)", m_tr: "Script detection, parsing, chunking", m_ffi: "FFI bridge between Dart and native",
            pv_eyebrow: "Privacy", pv_title: "Your data is yours alone", pv_text: "Köpri runs serverless. Translations, history and profile stay on-device and never hit the network.",
            pv_b1: "No internet", pv_b2: "No cloud", pv_b3: "No tracking",
            st_eyebrow: "For developers", st_title: "Build it in 5 minutes", st_sub: "Open source — build and explore.",
            st1: "Clone the repository", st2: "Install dependencies", st3: "Build the APK", copy_btn: "Copy", copy_done: "Copied!",
            tm_eyebrow: "Team", tm_title: "The creators of Köpri", tm_sub: "Two people. One bridge. Millions of translated words.",
            tm_role_web: "Web developer", tm_role_android: "Android developer",
            tm_web_note: "Design & web of this site", tm_android_note: "Author of the Köpri app",
            faq_title: "Frequently asked questions",
            q1: "Does Köpri really work without internet?", a1: "Yes. Translation and OCR models download once; after that everything runs offline — no Wi-Fi needed.",
            q2: "Which languages are supported?", a2: "English, Russian, Turkmen, Turkish, Kazakh, Uzbek, Ukrainian, Chinese, Japanese, Korean, Arabic, German, French, Spanish, Hindi and more — 50+ in total.",
            q3: "Is it free?", a3: "Completely. Köpri is open source under Apache 2.0.",
            q4: "How does hybrid OCR work?", a4: "Latin scripts are read by Google ML Kit (~0.3s); Cyrillic, Arabic, CJK and Devanagari by Tesseract.",
            q5: "Who created Köpri?", a5: "Android developer — Sylyýew Aýnazar, web — Annaýew Döwlet.",
            q6: "Is my data safe?", a6: "Yes: everything is stored on-device and never sent to the network.",
            fb_eyebrow: "Feedback", fb_title: "Leave a comment", fb_sub: "Tell us what you like and what we can improve in Köpri.", fb_name: "Name", fb_email: "Email (optional)", fb_message: "Comment", fb_submit: "Send", fb_success: "Thanks! Your feedback was sent.", fb_error: "Connect Firebase first and add your real project keys.", fb_recent: "Recent comments", fb_empty: "No comments yet.", fb_author: "Author", fb_email_label: "Email", fb_comment: "Comment", fb_name_placeholder: "Your name", fb_email_placeholder: "name@example.com", fb_message_placeholder: "Write your feedback here...",
            cta_title: "Ready to bridge languages?", cta_sub: "Get Köpri for free — and translate without borders.", cta_btn1: "Download APK", cta_btn2: "Star on GitHub", cta_note: "Free · Open source · Forever",
            ft_tag: "A bridge between languages. Offline.", ft_made: "Made with ❤️, Flutter and C++"
        }
    };
    var $ = function (s) { return document.querySelector(s) };
    var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)) };
    /* ================= THEME ================= */
    var savedTheme = localStorage.getItem('kopri_theme');
    savedTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    $('#themeToggle').setAttribute('aria-pressed', savedTheme === 'light' ? 'true' : 'false');
    $('#themeToggle').addEventListener('click', function () {
        var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('kopri_theme', t);
        $('#themeToggle').setAttribute('aria-pressed', t === 'light' ? 'true' : 'false');
    });
    /* ================= I18N APPLY ================= */
    var savedLang = localStorage.getItem('kopri_lang');
    var currentLang = I18N[savedLang] ? savedLang : 'ru';
    function applyI18n(lang) {
        if (!I18N[lang]) { lang = 'ru'; }
        currentLang = lang;
        localStorage.setItem('kopri_lang', lang);
        document.documentElement.lang = lang;
        var dict = I18N[lang];
        $$('[data-i18n]').forEach(function (el) {
            var k = el.getAttribute('data-i18n');
            if (dict[k] !== undefined) { el.innerHTML = dict[k]; }
        });
        $$('.lang-btn').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang) });
        $$('.copy-btn').forEach(function (b) { if (!b.dataset.done) b.textContent = dict.copy_btn; });
        var feedbackName = $('#feedbackName');
        var feedbackEmail = $('#feedbackEmail');
        var feedbackMessage = $('#feedbackMessage');
        if (feedbackName) feedbackName.placeholder = dict.fb_name_placeholder || feedbackName.placeholder;
        if (feedbackEmail) feedbackEmail.placeholder = dict.fb_email_placeholder || feedbackEmail.placeholder;
        if (feedbackMessage) feedbackMessage.placeholder = dict.fb_message_placeholder || feedbackMessage.placeholder;
        demoResultHint();
        renderFeedbackList(window.kopriFeedbackItems || []);
    }
    $$('.lang-btn').forEach(function (b) {
        b.addEventListener('click', function () { applyI18n(b.getAttribute('data-lang')); });
    });
    /* ================= PRELOADER ================= */
    function hidePreloader() { $('#preloader').classList.add('hidden'); }
    window.addEventListener('load', function () { setTimeout(hidePreloader, 500); });
    setTimeout(hidePreloader, 2500);
    /* ================= SCROLL: progress / navbar / toTop ================= */
    var navbar = $('#navbar'), toTop = $('#toTop'), progress = $('#scrollProgress');
    window.addEventListener('scroll', function () {
        var y = window.scrollY || document.documentElement.scrollTop;
        var h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        navbar.classList.toggle('scrolled', y > 10);
        toTop.classList.toggle('show', y > 700);
    }, { passive: true });
    toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    /* ================= BURGER ================= */
    var burger = $('#burgerBtn'), mobileMenu = $('#mobileMenu');
    burger.addEventListener('click', function () {
        var isOpen = mobileMenu.classList.toggle('open');
        burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    $$('#mobileMenu a').forEach(function (a) {
        a.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            mobileMenu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
    document.addEventListener('click', function (event) {
        if (mobileMenu.classList.contains('open') && !mobileMenu.contains(event.target) && !burger.contains(event.target)) {
            mobileMenu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
    /* ================= REVEAL ================= */
    var revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target); } });
    }, { threshold: .15 });
    $$('.reveal').forEach(function (el) { revealIO.observe(el); });
    /* ================= COUNTERS ================= */
    function animateCount(el) {
        var target = parseFloat(el.getAttribute('data-count'));
        var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
        var dur = 1600, start = null;
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var ease = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * ease).toFixed(dec);
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target.toFixed(dec);
        }
        requestAnimationFrame(step);
    }
    var countIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { animateCount(e.target); countIO.unobserve(e.target); } });
    }, { threshold: .6 });
    $$('[data-count]').forEach(function (el) { countIO.observe(el); });
    /* ================= HERO TILT ================= */
    var stage = $('#phoneStage'), phone = $('#heroPhone');
    if (window.matchMedia('(pointer:fine)').matches) {
        stage.addEventListener('mousemove', function (ev) {
            var r = stage.getBoundingClientRect();
            var x = (ev.clientX - r.left) / r.width - .5;
            var y = (ev.clientY - r.top) / r.height - .5;
            phone.style.transform = 'rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 8) + 'deg)';
        });
        stage.addEventListener('mouseleave', function () { phone.style.transform = 'rotateY(0) rotateX(0)'; });
    }
    /* ================= SHOTS SLIDER ================= */
    var track = $('#shotsTrack'), shots = $$('.shot'), dotsBox = $('#shotsDots'), shotIndex = 0, autoTimer = null;
    shots.forEach(function (_, i) {
        var d = document.createElement('button');
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        d.addEventListener('click', function () { goShot(i); resetAuto(); });
        dotsBox.appendChild(d);
    });
    var dots = $$('#shotsDots button');
    function shotStep() { var s = shots[1] ? shots[1].getBoundingClientRect().left - shots[0].getBoundingClientRect().left : 300; return s; }
    function goShot(i) {
        shotIndex = Math.max(0, Math.min(shots.length - 1, i));
        track.scrollTo({ left: shotIndex * shotStep() - ((track.clientWidth - shots[0].getBoundingClientRect().width) / 2) + (shotStep() - shots[0].getBoundingClientRect().width) / 2, behavior: 'smooth' });
    }
    function updateShots() {
        var i = Math.round(track.scrollLeft / shotStep());
        i = Math.max(0, Math.min(shots.length - 1, i));
        shotIndex = i;
        dots.forEach(function (d, j) { d.classList.toggle('active', j === i) });
        shots.forEach(function (s, j) { s.classList.toggle('active', j === i) });
    }
    track.addEventListener('scroll', function () { requestAnimationFrame(updateShots); }, { passive: true });
    $('#shotsPrev').addEventListener('click', function () { goShot(shotIndex - 1); resetAuto(); });
    $('#shotsNext').addEventListener('click', function () { goShot(shotIndex + 1); resetAuto(); });
    function startAuto() { autoTimer = setInterval(function () { goShot(shotIndex >= shots.length - 1 ? 0 : shotIndex + 1); }, 4500); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }
    startAuto(); updateShots();
    /* ================= DEMO ================= */
    var DEMO = [
        { en: "Hello!", ru: "Привет!", tk: "Salam!" },
        { en: "Thank you very much!", ru: "Большое спасибо!", tk: "Örän sag bol!" },
        { en: "Where is the nearest café?", ru: "Где ближайшее кафе?", tk: "Iň ýakyn kafe nirede?" },
        { en: "How much does it cost?", ru: "Сколько это стоит?", tk: "Bu näçe durýar?" },
        { en: "See you soon!", ru: "До скорой встречи!", tk: "Ýene görüşeris!" }
    ];
    var demoPhrase = 0, demoTarget = 'ru', typeTimer = null;
    var chipsBox = $('#phraseChips'), demoText = $('#demoText');
    DEMO.forEach(function (p, i) {
        var b = document.createElement('button');
        b.className = 'phrase-chip' + (i === 0 ? ' selected' : '');
        b.textContent = p.en;
        b.addEventListener('click', function () {
            demoPhrase = i;
            $$('.phrase-chip').forEach(function (c, j) { c.classList.toggle('selected', j === i) });
            runDemo();
        });
        chipsBox.appendChild(b);
    });
    $$('.demo-lang').forEach(function (b) {
        b.addEventListener('click', function () {
            demoTarget = b.getAttribute('data-target');
            $$('.demo-lang').forEach(function (x) { x.classList.toggle('active', x === b) });
            runDemo();
        });
    });
    function demoResultHint() {
        if (!demoText.dataset.typed) { demoText.textContent = I18N[currentLang].demo_result_hint; }
    }
    function runDemo() {
        clearInterval(typeTimer);
        var text = DEMO[demoPhrase][demoTarget] || DEMO[demoPhrase].en;
        demoText.dataset.typed = '1';
        demoText.textContent = '';
        var i = 0;
        typeTimer = setInterval(function () {
            demoText.textContent = text.slice(0, ++i);
            if (i >= text.length) clearInterval(typeTimer);
        }, 26);
    }
    $$('.demo-lang')[0].classList.add('active');
    demoResultHint();
    /* ================= FAQ ================= */
    $$('.faq-item').forEach(function (item) {
        var q = item.querySelector('.faq-q'), a = item.querySelector('.faq-a');
        q.addEventListener('click', function () {
            var open = item.classList.contains('open');
            $$('.faq-item.open').forEach(function (o) {
                o.classList.remove('open');
                o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
                o.querySelector('.faq-a').style.maxHeight = null;
            });
            if (!open) {
                item.classList.add('open');
                q.setAttribute('aria-expanded', 'true');
                a.style.maxHeight = a.scrollHeight + 'px';
            }
        });
    });
    /* ================= FEEDBACK ================= */
    var feedbackForm = $('#feedbackForm');
    var feedbackStatus = $('#feedbackStatus');
    var feedbackList = $('#feedbackList');
    window.kopriFeedbackItems = [];
    var lastFeedbackSubmit = 0;

    function renderFeedbackList(items) {
        if (!feedbackList) return;
        feedbackList.innerHTML = '';
        if (!items || !items.length) {
            var empty = document.createElement('div');
            empty.className = 'feedback-empty';
            empty.textContent = I18N[currentLang].fb_empty || 'No comments yet.';
            feedbackList.appendChild(empty);
            return;
        }

        items.forEach(function (item) {
            var card = document.createElement('article');
            card.className = 'feedback-item';

            var top = document.createElement('div');
            top.className = 'feedback-item-top';

            var author = document.createElement('div');
            author.className = 'feedback-author';
            author.textContent = (item.name || 'Anonymous');

            top.appendChild(author);

            var message = document.createElement('div');
            message.className = 'feedback-message';
            message.textContent = item.message || '';

            var time = document.createElement('div');
            time.className = 'feedback-time';
            if (item.createdAt) {
                var date = item.createdAt.toDate ? item.createdAt.toDate() : new Date(item.createdAt);
                time.textContent = date.toLocaleString();
            } else {
                time.textContent = '—';
            }

            card.appendChild(top);
            card.appendChild(message);
            card.appendChild(time);
            feedbackList.appendChild(card);
        });
    }

    function loadFeedbackList() {
        if (!window.kopriDb) {
            renderFeedbackList([]);
            return;
        }

        window.kopriDb.collection('comments')
            .orderBy('createdAt', 'desc')
            .limit(20)
            .onSnapshot(function (snapshot) {
                var items = [];
                snapshot.forEach(function (doc) {
                    var data = doc.data();
                    items.push({
                        id: doc.id,
                        name: data.name || 'Anonymous',
                        message: data.message || '',
                        createdAt: data.createdAt || null
                    });
                });
                window.kopriFeedbackItems = items;
                renderFeedbackList(items);
            }, function () {
                renderFeedbackList([]);
            });
    }

    if (feedbackForm && feedbackStatus) {
        feedbackForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var name = ($('#feedbackName').value || '').trim();
            var email = ($('#feedbackEmail').value || '').trim();
            var message = ($('#feedbackMessage').value || '').trim();
            var lang = currentLang || 'ru';
            var now = Date.now();

            if (now - lastFeedbackSubmit < 30000) {
                feedbackStatus.textContent = I18N[lang].fb_rate_limit || 'Please wait before sending another comment.';
                feedbackStatus.classList.remove('success');
                feedbackStatus.classList.add('error');
                return;
            }

            if (message.length < 3 || message.length > 2000 || name.length > 80 || email.length > 160) {
                feedbackStatus.textContent = I18N[lang].fb_validation || 'Please check the form fields.';
                feedbackStatus.classList.remove('success');
                feedbackStatus.classList.add('error');
                return;
            }

            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                feedbackStatus.textContent = I18N[lang].fb_validation || 'Please check the form fields.';
                feedbackStatus.classList.remove('success');
                feedbackStatus.classList.add('error');
                return;
            }

            if (!window.kopriFirebaseReady || !window.kopriDb || !firebase.firestore) {
                feedbackStatus.textContent = I18N[lang].fb_error;
                feedbackStatus.classList.remove('success');
                feedbackStatus.classList.add('error');
                return;
            }

            window.kopriDb.collection('comments').add({
                name: name || 'Anonymous',
                message: message,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }).then(function () {
                lastFeedbackSubmit = Date.now();
                feedbackForm.reset();
                feedbackStatus.textContent = I18N[lang].fb_success;
                feedbackStatus.classList.remove('error');
                feedbackStatus.classList.add('success');
            }).catch(function (error) {
                console.error('Feedback save error:', error);
                feedbackStatus.textContent = 'Something went wrong while saving the comment.';
                feedbackStatus.classList.remove('success');
                feedbackStatus.classList.add('error');
            });
        });
    }
    loadFeedbackList();
    /* ================= COPY ================= */
    $$('.copy-btn').forEach(function (b) {
        b.addEventListener('click', function (ev) {
            ev.stopPropagation();
            var txt = b.getAttribute('data-copy');
            function done() { b.dataset.done = '1'; b.textContent = I18N[currentLang].copy_done; setTimeout(function () { delete b.dataset.done; b.textContent = I18N[currentLang].copy_btn; }, 1600); }
            if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt).then(done).catch(done); }
            else { var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { } document.body.removeChild(ta); done(); }
        });
    });
    /* ================= INIT ================= */
    $('#year').textContent = new Date().getFullYear();
    applyI18n(currentLang);
})();
