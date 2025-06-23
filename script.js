body {
    font-family: 'Arial', sans-serif;
    background-color: #fbe9e7;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: background-color 0.3s ease-in-out;
}

.container {
    background-color: #fff0f6; /* Pembe arka plan */
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 700px;
    z-index: 2;
    position: relative;
    animation: fadeIn 1s ease-out;
}

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

#loveName {
    font-size: 3rem;
    color: #ff4081;
    margin-bottom: 20px;
    animation: nameAnimation 2s ease-out;
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
    background-color: #e91e63;
    clip-path: polygon(50% 0%, 0% 40%, 50% 100%, 100% 40%);
    transform: rotate(-45deg);
    position: absolute;
    animation: floatHeart 5s infinite ease-in-out;
}

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

.romantic-phrases {
    margin-top: 50px;
}

.phrase {
    font-size: 1.5rem;
    color: #333;
    animation: fadeInOut 5s infinite;
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    10%, 90% { opacity: 1; }
}

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

.audio-controls {
    margin-top: 20px;
    position: relative;
}

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
