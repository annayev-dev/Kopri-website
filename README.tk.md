# Köpri — Web görkezme sahypasy (Türkmençe)

Gysgaça: Bu repository Köpri mobil programmanyň marketing bir sahypasyny öz içine alýar. Ol ýüngül, animasiýaly we şriftler bilen baý bir bir sahypalyk landing sahypasydyr (index.html).

---

Tipografiýa: Manrope & JetBrains Mono · Gara/Açyk tema · Köp CSS animasiýalary

## Gysgaça mazmuny

Repo içindäki index.html:

- Göz catches hero bölümi (gradient başlyklar, CTA düwmeleri)
- Telefony görkezýän mockup (perspective, glow, float chipler)
- Preloader, blob‑formasy, float we pulse animasiýalary
- `html[data-theme]` arkaly gara / açyk tema goldawy
- Şriftler CDN arkaly: Manrope we JetBrains Mono

---

## Görnüş we typografiýa

- Şriftler head bölüminde @fontsource CDN arkaly goşuldy.
- Görnüşleri görkezmek üçin `assets/` içine GIF ýa-da skrinşotlar goşuň (meselem `assets/demo.gif`, `assets/screenshot-hero.png`) we README içine goýuň.

---

## Animasiýalar (gysga)

- Preloader: pulsirleýan logo we hereket edýän ýükleme bar
- Bloblar: arka planda akarlanan we hereket edýän ýumşak şekiller
- Float chipler: telefon mockup töwereginde maglumat çipleri
- CTA parlama: düwme üstünde skew'ed ak gradient
- Marquee: awtomatiki süýşýän tekst setiri (hover bilen durýar)

Belläp geçmeli: uly blur we agyr box‑shadow mobilde çäkli bolmagy mümkin — olary azaltmak göz öňünde bulunsuň.

---

## Ýerelde öňünden görmek

1. Repo klonlaň:

   git clone https://github.com/annayev-dev/Kopri-website.git
   cd Kopri-website

2. Ýönekeý statik server açyň:

   # Python 3
   python -m http.server 8000

   # ýa-da
   npx serve .

3. Aç: http://localhost:8000/index.html

---

## Üýtgetme maslahatlary

- Tema reňklerini `:root` içindäki CSS üýtgeýjileri üsti bilen üýtgediň (`--accent`, `--bg` we s.).
- Başga şriftleri ulanmak üçin head bölümindäki linkleri üýtgediň.
- Accessibility üçin `prefers-reduced-motion` goşuň.
- Modul gurluşy üçin CSS we JS-ny aýryň (`styles.css`, `app.js`).

---

## Faýl gurluşy (gysga)

- `index.html` — bir sahypalyk (HTML + CSS + kiçi JS)
- `assets/` — görnüşler, ikonalar, demo GIF faýllary

---

## Lisans

Depoda lisans ýok bolsa (MIT, Apache-2.0 we ş.m.), haýsy birini isleýändigiňizi aýdyp bilersiňiz — men goşaryn.

---

Isleseňiz, men hem şu aşakdaky işleri edip bilerin:

- badge'ler, şrift öňüne çekişler we canlı demo baglanyşygyny goşmak
- iki dilli README (EN/TR) döretmek
- hero üçin kiçi GIF'ler döretmek we assets içine goýmak
