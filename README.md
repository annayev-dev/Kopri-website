<div align="center">

<img src="./assets/icon/app_icon.png" alt="Köpri" width="120" />

# Köpri — Web Tanıtım Sitesi

**Kısa:** Köpri mobil uygulamasının bu depo içi web tanıtımı; tek sayfa, animasyonlu ve fontlarla zenginleştirilmiş bir pazarlama sitesi (index.html).

</div>

---

<p align="center">
<b>Manrope</b> ve <b>JetBrains Mono</b> ile özel tipografi · Karanlık / Açık tema · Zengin CSS animasyonları

</p>

## ✨ Hızlı Özet

Bu repo, Köpri uygulamasının tanıtım sayfasını içerir. index.html dosyası:

- Güçlü hero bölümü (gradient başlıklar, CTA butonları)
- Telefon mockup gösterimi (perspective, glow, yüzen "chip" öğeleri)
- Preloader, marquee, float ve pulse animasyonları
- Karanlık / açık tema desteği (html[data-theme])
- Manrope (başlıklar/metin) ve JetBrains Mono (monospace) fontlarını CDN üzerinden kullanır

---

## 🎨 Görsel & Tipografi

- Fontlar sayfanın head bölümünde CDN ile eklenmiş: Manrope (400/500/600/700/800) ve JetBrains Mono (400/700).
- README içinde canlı örnek GIF/ekran görüntüsü göstermek istersen `assets/` altında demo dosyaları ekle: `assets/demo.gif`, `assets/screenshot-hero.png`.

---

## 🔥 Animasyonlar (index.html'den özet)

- Preloader: ortada logo ve kayan yükleme çubuğu (pulse + load keyframes).
- Bloblar: arka planda yumuşak blur'lu hareket eden renkli formlar (filter: blur, float keyframe).
- Float chip'ler: telefon mockup çevresinde bilgi kartları, yumuşak yukarı/aşağı kayan animasyon.
- CTA parlama: buton üzerinde kayıp parlama efekti (::after ile skewed white gradient).
- Marquee: otomatik kayan metin bandı (hover ile durur).

Not: Performans için büyük blur ve ağır box-shadow'ları mobilde azaltmayı düşün.

---

## 🚀 Yerelde Önizleme

1. Repoyu klonla:

   git clone https://github.com/annayev-dev/Kopri-website.git
   cd Kopri-website

2. Basit sunucu ile aç:

   # Python 3
   python -m http.server 8000

   # veya npx serve
   npx serve .

3. Tarayıcıda aç: http://localhost:8000/index.html

---

## 🧩 Özelleştirme Önerileri

- Tema renkleri için `:root` altındaki `--accent`, `--accent-2`, `--bg` vb. değişkenleri değiştir.
- Fontları değiştirmek için head kısmındaki @fontsource linklerini düzenle veya Google Fonts kullan.
- Animasyonları zenginleştirmek için `@keyframes` ekleyebilir veya `prefers-reduced-motion` ile azaltma desteği ekleyebilirsin.
- Daha modüler bir yapı istersen CSS'i `styles.css`, JS'i `app.js` olarak ayır ve assetleri `assets/` içinde topla.

---

## 📁 Dosya Yapısı (kısaca)

- index.html — tek sayfa, içerik + CSS + küçük miktar JS
- assets/ — görseller, ikonlar, demo GIF'leri

---

## 📝 Güncelleme Notları

Mevcut README, uygulama deposundan (Flutter/C++ projesi) alınmış geniş bir içerik barındırıyor. Bu README, web tanıtım sayfasını odak noktası yapacak şekilde sadeleştirildi. İstersen:

- Bunu genişletip iki dil (TR / EN) yapabilirim.
- PDF veya GIF ile görsel bir "landscape" ekleyebilirim.
- Badge, Google Fonts önizlemesi ve canlı demo bağlantıları ekleyebilirim.

---

## 📜 Lisans

Depoda henüz lisans yoksa belirt: örn. MIT veya Apache-2.0. İstersen README'ye otomatik olarak lisans bölümü ekleyebilirim.

---

Hazır; README'yi web sitesi odaklı Türkçe versiyonuna güncellemek istedim. Onaylarsan README.md dosyasını repoya kaydederim veya farklı bir dil/format istersen hemen düzenlerim.