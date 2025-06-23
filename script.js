/* Genel Sayfa Ayarları */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
    background: linear-gradient(135deg, #ff66b2, #ff99cc, #ffccff); /* Romantik gradient */
    animation: gradientAnimation 5s ease-in-out infinite; /* Arka plan animasyonu */
}

/* Arka plan gradient animasyonu */
@keyframes gradientAnimation {
    0% { background: linear-gradient(135deg, #ff66b2, #ff99cc, #ffccff); }
    50% { background: linear-gradient(135deg, #ffccff, #ff99cc, #ff66b2); }
    100% { background: linear-gradient(135deg, #ff66b2, #ff99cc, #ffccff); }
}

/* Container (Ana kutu) */
.container {
    background-color: rgba(255, 255, 255, 0.8); /* Hafif şeffaf beyaz arka plan */
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 700px;
    z-index: 2;
    position: relative;
    animation: fadeIn 1s ease-out;
}

/* Sayfa yüklendiğinde container'ı yavaşça görünür yapacak animasyon */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Elif ismi için animasyon */
#loveName {
    font-size: 3.5rem;
    color: #ff4081;
    margin-bottom: 20px;
    animation: nameAnimation 2s ease-out;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
}

@keyframes nameAnimation {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Kalp animasyonları */
.heart-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
}

.heart {
    width: 40px;
    height: 40px;
    background-color: #ff4081;
    clip-path: polygon(50% 0%, 0% 40%, 50% 100%, 100% 40%);
    transform: rotate(-45deg);
    position: absolute;
    animation: floatHeart 5s infinite ease-in-out;
}

/* Kalp animasyonları */
@keyframes floatHeart {
    0% { transform: translateY(0) rotate(-45deg); }
    50% { transform: translateY(-200px) rotate(-45deg); }
    100% { transform: translateY(0) rotate(-45deg); }
}

.heart:nth-child(1) {
    animation-delay: 0s;
    left: 10%;
}

.heart:nth-child(2) {
    animation-delay: 1.2s;
    left: 30%;
}

.heart:nth-child(3) {
    animation-delay: 2.4s;
    left: 50%;
}

.heart:nth-child(4) {
    animation-delay: 3.6s;
    left: 70%;
}

/* Romantik cümleler animasyonu */
.romantic-phrases {
    margin-top: 50px;
}

.phrase {
    font-size: 1.6rem;
    color: #333;
    opacity: 0;
    animation: fadeInOut 5s infinite;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    10%, 90% { opacity: 1; }
}

/* Spotify çalma listesi animasyonu */
.spotify {
    margin-top: 30px;
    animation: slideIn 1.5s ease-out;
}

@keyframes slideIn {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Ses kaydırıcı animasyonu */
.audio-controls {
    margin-top: 20px;
    position: relative;
    animation: fadeIn 2s ease-in-out;
}

/* Ses kaydırıcı stil ayarları */
#volume {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: #ddd;
    -webkit-appearance: none;
    appearance: none;
    transition: background-color 0.3s ease;
}

#volume::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #e91e63;
    border-radius: 50%;
    cursor: pointer;
}

#volume::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #e91e63;
    border-radius: 50%;
    cursor: pointer;
}

#volume:focus {
    outline: none;
}

#volume[value="100"] {
    background-color: #e91e63;
}

/* Spotify başlığını küçült ve sağa yerleştir */
#spotifyTitle {
    font-size: 1.2rem;
    color: #ff4081;
    text-align: right;
    margin-bottom: 10px;
}

/* Ok butonları stil ayarları */
.nav-button {
    background-color: #ff4081;
    color: white;
    border: none;
    padding: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.nav-button:hover {
    background-color: #e91e63;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
}

#prevBtn, #nextBtn {
    margin: 0 20px;
}

/* Kalp animasyonlarını renkli yapma */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #2c2c2c;
        color: white;
    }

    .container {
        background-color: #333;
    }

    .heart {
        background-color: #ff4081;
    }

    #volume {
        background-color: #333;
    }
}
