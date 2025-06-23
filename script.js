// Romantik cümleler dizisi
let phrases = [
    "Elif, sen benim hayatımın en güzel parçasısın!",
    "Sonsuza kadar seninle olmak, hayalim.",
    "Her anı seninle geçirmek istiyorum.",
    "Senin gülüşün, dünyamı aydınlatıyor.",
    "Aşkımız her geçen gün daha da büyüyor.",
    "Seninle her şey daha güzel, daha özel.",
    "Gözlerinde kaybolmak, en büyük huzurum.",
    "Her adımda seni hissetmek, en güzel şey.",
    "Elif, seninle her an bir masal gibi.",
    "Birlikte her şeyin üstesinden geliriz."
];

// İlk cümleyi başlat
let currentPhraseIndex = 0;
let phraseDisplay = document.getElementById("phraseDisplay");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

// Cümleyi ekrana yerleştir
function displayPhrase(index) {
    phraseDisplay.textContent = phrases[index];
    phraseDisplay.style.opacity = 0; // Başlangıçta görünmez
    setTimeout(() => {
        phraseDisplay.style.transition = "opacity 1s ease-in-out";
        phraseDisplay.style.opacity = 1; // Görünür yap
    }, 100);
}

// "Önceki" butonuna tıklandığında
prevBtn.addEventListener("click", () => {
    currentPhraseIndex = (currentPhraseIndex - 1 + phrases.length) % phrases.length; // Döngüsel
    displayPhrase(currentPhraseIndex);
});

// "Sonraki" butonuna tıklandığında
nextBtn.addEventListener("click", () => {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Döngüsel
    displayPhrase(currentPhraseIndex);
});

// Sayfa yüklendiğinde ilk cümleyi göster
displayPhrase(currentPhraseIndex);

// Ses kaydırıcısı
let volumeControl = document.getElementById("volume");
let backgroundMusic = document.getElementById("backgroundMusic");

// Ses kaydırıcısını ayarladığında sesi değiştir
volumeControl.addEventListener("input", () => {
    let volume = volumeControl.value / 100; // Ses seviyesi 0-1 arasında olmalı
    backgroundMusic.volume = volume;
});

// Sayfa açıldığında ses seviyesini varsayılan olarak 50 yap
volumeControl.value = 50;
backgroundMusic.volume = volumeControl.value / 100;
