let phrases = [
    "Elif, sen benim hayatımın en güzel parçasısın!",
    "Sonsuza kadar seninle olmak, hayalim.",
    "Her anı seninle geçirmek, en güzel hediye.",
    "Gözlerindeki o parıltıyı görmek, beni her zaman büyüler.",
    "Seninle her şey çok daha güzel, Elif.",
    "Sana her baktığımda, geleceğimi daha parlak görüyorum.",
    "Birlikte yaşlanmak, en büyük dileğim.",
    "Elif, seninle her şey mümkün.",
    "Sadece seni düşünmek bile kalbimi hızlandırıyor."
];

let phraseDisplay = document.getElementById("phraseDisplay");
let phraseIndex = 0;

function displayPhrase() {
    phraseDisplay.innerHTML = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(displayPhrase, 6000);  // Her 6 saniyede bir cümleyi değiştirir

// Ses Seviyesi Kontrolü
const volumeControl = document.getElementById('volume');
const backgroundMusic = document.getElementById('backgroundMusic');

volumeControl.addEventListener('input', function() {
    backgroundMusic.volume = volumeControl.value / 100;

    // Ses seviyesi değiştikçe kaydırıcının rengini değiştir
    const volumeValue = volumeControl.value;
    if (volumeValue <= 30) {
        volumeControl.style.backgroundColor = "#f44336";  // Kırmızı
    } else if (volumeValue <= 70) {
        volumeControl.style.backgroundColor = "#ff9800";  // Turuncu
    } else {
        volumeControl.style.backgroundColor = "#4caf50";  // Yeşil
    }
});
