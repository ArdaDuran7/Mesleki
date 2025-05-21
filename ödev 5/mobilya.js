// Mevcut (aktif) slaytın indeksini tutar
let currentSlide = 0;

// Tüm slaytları seçer (".slide" sınıfına sahip öğeler)
const slides = document.querySelectorAll('.slide');

/**
 * Belirtilen slaytı gösteren fonksiyon.
 * Tüm slaytlardaki "active" sınıfını kaldırır ve
 * sadece belirtilen indeksteki slayta "active" sınıfı ekler.
 */
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Önce tüm slaytlardan "active" kaldırılır
    if (i === index) {
      slide.classList.add('active'); // Sadece seçilen slayta "active" eklenir
    }
  });
}

/**
 * Slayt değiştirici fonksiyon.
 * step değeri kadar ileri (veya geri) giderek yeni slaytı gösterir.
 * % işlemi ile kaydırmalı (loop) geçiş sağlanır.
 */
function changeSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Otomatik geçiş: her 5 saniyede bir sonraki slayta geçiş yapılır
setInterval(() => {
  changeSlide(1);
}, 5000);

// Sayfa yüklendiğinde ilk slaytı gösterir
showSlide(currentSlide);