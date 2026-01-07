const fruits = [
    {
        id: 'apple',
        name: 'Apel',
        emoji: '🍎',
        clues: {
            easy: 'Aku berwarna merah, bulat, dan rasanya manis renyah.',
            medium: 'Putri Salju pingsan setelah memakanku.',
            hard: 'Aku buah yang jatuh dan menginspirasi Isaac Newton.'
        }
    },
    {
        id: 'banana',
        name: 'Pisang',
        emoji: '🍌',
        clues: {
            easy: 'Aku berwarna kuning dan panjang.',
            medium: 'Monyet sangat suka memakanku.',
            hard: 'Aku tumbuh di pohon, tapi sebenarnya aku adalah tanaman herbal raksasa.'
        }
    },
    {
        id: 'orange',
        name: 'Jeruk',
        emoji: '🍊',
        clues: {
            easy: 'Aku berwarna oranye dan bulat.',
            medium: 'Rasaku asam manis dan kaya Vitamin C.',
            hard: 'Namaku sama dengan warnaku dalam bahasa Inggris.'
        }
    },
    {
        id: 'grape',
        name: 'Anggur',
        emoji: '🍇',
        clues: {
            easy: 'Aku kecil, bulat, dan berwarna ungu.',
            medium: 'Aku tumbuh bergerombol dan bisa dibuat menjadi kismis.',
            hard: 'Aku sering difermentasi untuk membuat minuman tua.'
        }
    },
    {
        id: 'watermelon',
        name: 'Semangka',
        emoji: '🍉',
        clues: {
            easy: 'Aku besar, kulit hijau, daging merah.',
            medium: 'Bijiku banyak dan aku sangat segar dimakan saat panas.',
            hard: 'Aku mengandung 92% air dan berasal dari Afrika.'
        }
    },
    {
        id: 'strawberry',
        name: 'Stroberi',
        emoji: '🍓',
        clues: {
            easy: 'Aku kecil, merah, dan berbintik-bintik.',
            medium: 'Aku satu-satunya buah yang bijinya ada di luar.',
            hard: 'Aku sering dijadikan selai dan hiasan kue tart.'
        }
    },
    {
        id: 'pineapple',
        name: 'Nanas',
        emoji: '🍍',
        clues: {
            easy: 'Kulitku kasar dan berduri, dagingku kuning.',
            medium: 'Aku punya mahkota daun hijau di atas kepalaku.',
            hard: 'Aku mengandung enzim Bromelain yang bisa mengempukkan daging.'
        }
    },
    {
        id: 'mango',
        name: 'Mangga',
        emoji: '🥭',
        clues: {
            easy: 'Kulitku hijau/oranye, dagingku oranye manis.',
            medium: 'Bauku sangat harum dan manis, aku raja buah tropis.',
            hard: 'Di India, aku adalah buah nasional yang sangat dipuja.'
        }
    },
    {
        id: 'cherry',
        name: 'Ceri',
        emoji: '🍒',
        clues: {
            easy: 'Aku kecil, merah, bulat, dan punya tangkai panjang.',
            medium: 'Aku sering ditaruh di atas kue ulang tahun sebagai hiasan.',
            hard: 'Di Jepang, bunga pohonku (Sakura) sangat terkenal.'
        }
    },
    {
        id: 'lemon',
        name: 'Lemon',
        emoji: '🍋',
        clues: {
            easy: 'Aku kuning, lonjong, dan rasanya sangat asam.',
            medium: 'Aku sering dijadikan minuman es yang menyegarkan.',
            hard: 'Aku punya kadar asam sitrat yang tinggi dan bisa membersihkan noda.'
        }
    },
    {
        id: 'peach',
        name: 'Persik',
        emoji: '🍑',
        clues: {
            easy: 'Aku bulat, berwarna pink-oranye, dan kulitku berbulu halus.',
            medium: 'Di dalamku ada biji yang besar dan keras.',
            hard: 'Dalam mitologi Tiongkok, aku adalah simbol keabadian.'
        }
    },
    {
        id: 'pear',
        name: 'Pir',
        emoji: '🍐',
        clues: {
            easy: 'Bentukku unik, melebar di bawah dan mengecil di atas.',
            medium: 'Daging buahku putih dan berpasir tapi manis.',
            hard: 'Aku bersaudara dekat dengan apel tapi teksturku lebih lunak.'
        }
    },
    {
        id: 'kiwi',
        name: 'Kiwi',
        emoji: '🥝',
        clues: {
            easy: 'Kulitku cokelat berbulu, tapi dalamnya hijau terang.',
            medium: 'Dagingku berbintik hitam kecil dan rasanya asam manis.',
            hard: 'Aku dinamai seperti burung yang tidak bisa terbang dari Selandia Baru.'
        }
    },
    {
        id: 'coconut',
        name: 'Kelapa',
        emoji: '🥥',
        clues: {
            easy: 'Kulitku keras berwarna cokelat, dalamnya putih.',
            medium: 'Air di dalamku sangat segar diminum di pantai.',
            hard: 'Pohonku disebut pohon kehidupan karena semua bagiannya berguna.'
        }
    },
    {
        id: 'melon',
        name: 'Melon',
        emoji: '🍈',
        clues: {
            easy: 'Aku bulat besar, kulitku hijau muda bertekstur jaring.',
            medium: 'Dagingku hijau muda atau oranye, rasanya manis berair.',
            hard: 'Aku masih satu keluarga dengan labu dan mentimun.'
        }
    },
    {
        id: 'avocado',
        name: 'Alpukat',
        emoji: '🥑',
        clues: {
            easy: 'Kulitku hijau tua, dagingku hijau kekuningan lembut.',
            medium: 'Aku sering dibuat jus kental atau dimakan dengan roti.',
            hard: 'Aku adalah buah yang mengandung banyak lemak sehat.'
        }
    },
    {
        id: 'blueberry',
        name: 'Blueberry',
        emoji: '🫐',
        clues: {
            easy: 'Aku bulat kecil sekali dan berwarna biru gelap.',
            medium: 'Aku sering ada di dalam muffin atau pancake.',
            hard: 'Aku adalah salah satu makanan super dengan antioksidan tinggi.'
        }
    },
    {
        id: 'green_apple',
        name: 'Apel Hijau',
        emoji: '🍏',
        clues: {
            easy: 'Aku seperti apel tapi warnaku hijau.',
            medium: 'Rasaku lebih asam daripada saudaraku yang merah.',
            hard: 'Salah satu varietas terkenalku adalah Granny Smith.'
        }
    }
];

// Game Logic
const levels = 8;
const questionsPerRound = 10; // Set strictly to 10 as requested
let currentLevel = 1;
let currentScore = 0;
let highScore = localStorage.getItem('fruitQuizHighScore') || 0;
let currentQuestionIndex = 0;
let isGameActive = false;
let targetFruit = null;

// Init
document.getElementById('high-score-display').textContent = highScore;
generateAmbientElements();

function playClickSound() {
    const sfx = document.getElementById('sfx-click');
    if (sfx) {
        sfx.currentTime = 0;
        // Simple synth beep if file fails
        sfx.play().catch(() => {
            // Fallback beep just in case
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 600;
            gain.gain.value = 0.1;
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        });
    }
}

function playStartSound() {
    // A more distinct "Start Game" chime using Web Audio API
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;

    // Create 3 oscillators for a chord/arpeggio
    [440, 554, 659].forEach((freq, i) => { // A4, C#5, E5 (A Major)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);

        gain.gain.setValueAtTime(0.1, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.6);
    });
}

function enterGame() {
    playStartSound(); // Play special start sound

    // Transition Sequence
    const startScreen = document.getElementById('start');
    const character = document.getElementById('character');

    // 1. Fade out Start Screen
    startScreen.classList.add('fade-out');

    // 2. Character Run In Animation
    character.classList.add('character-run');

    // 3. Wait for animation then switch
    setTimeout(() => {
        // Attempt play music
        const bgm = document.getElementById('bgm');
        if (bgm && bgm.paused) {
            bgm.volume = 0.3;
            bgm.play().catch(() => { });
        }

        startScreen.classList.remove('active', 'fade-out');
        startScreen.style.display = 'none';

        document.getElementById('level-select').style.display = 'flex';
        document.getElementById('level-select').classList.add('active');

        generateLevels();
    }, 800); // 0.8s transition
}


function generateAmbientElements() {
    const layer = document.getElementById('ambient-layer');
    if (!layer) return;

    // Bubbles
    for (let i = 0; i < 8; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.style.left = Math.random() * 100 + '%';
        b.style.width = (Math.random() * 30 + 10) + 'px';
        b.style.height = b.style.width;
        b.style.animationDuration = (Math.random() * 5 + 5) + 's';
        b.style.animationDelay = (Math.random() * 5) + 's';
        layer.appendChild(b);
    }

    // Random Stars / Floating Fruit
    const fruitsList = ['🍎', '🍌', '🍇', '⭐', '✨'];
    for (let i = 0; i < 5; i++) {
        const f = document.createElement('div');
        f.className = 'star-twinkle';
        f.textContent = fruitsList[Math.floor(Math.random() * fruitsList.length)];
        f.style.left = Math.random() * 100 + '%';
        f.style.top = Math.random() * 50 + '%';
        f.style.animationDelay = (Math.random() * 2) + 's';
        layer.appendChild(f);
    }
}

function showHint() {
    if (!targetFruit) return;
    playClickSound();
    alert(`Psst! Buahnya berwarna ${targetFruit.clues.easy.split(' ')[2] || 'unik'}! 🤫`);
}

function updateHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('fruitGameHighScore', highScore);
        document.getElementById('high-score-display').textContent = highScore;
    }
}

function showStartScreen() {
    playClickSound();
    // Logic to return start
    // ... Simplified for brevity, same as before but ensure classes reset
    document.getElementById('level-select').classList.remove('active');
    document.getElementById('level-select').style.display = 'none';

    const start = document.getElementById('start');
    start.style.display = 'flex';
    start.classList.remove('fade-out'); // Reset fade
    setTimeout(() => start.classList.add('active'), 50);
}

function generateLevels() {
    const grid = document.getElementById('level-grid');
    grid.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        const fruitIcon = fruits[(i - 1) % fruits.length].emoji;

        btn.innerHTML = `
            <span class="level-icon">${fruitIcon}</span>
            <span class="level-number">Level ${i}</span>
        `;

        btn.onclick = () => startLevel(i);
        grid.appendChild(btn);
    }
}

function startLevel(level) {
    playClickSound();
    currentLevel = level;
    document.getElementById('level-select').classList.remove('active');
    document.getElementById('level-select').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    document.getElementById('game').classList.add('active');

    // Show Hint Button
    document.getElementById('hint-btn').classList.remove('hidden');

    startGame();
}

function startGame() {
    isGameActive = true;
    currentScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = currentScore;
    document.getElementById('game-area').style.display = 'flex';
    document.getElementById('game-over').style.display = 'none';
    nextQuestion();
}

function nextQuestion() {
    const fbView = document.getElementById('feedback-view');
    if (fbView) {
        fbView.classList.remove('active');
        fbView.style.display = 'none';
    }

    document.getElementById('game').style.display = 'flex';
    document.getElementById('game').classList.add('active');

    if (currentQuestionIndex >= questionsPerRound) {
        endGame();
        return;
    }

    currentQuestionIndex++;
    targetFruit = fruits[Math.floor(Math.random() * fruits.length)];

    // Select Clue based on Level
    let clueText = targetFruit.clues.easy;
    if (currentLevel >= 4 && currentLevel <= 6) {
        clueText = targetFruit.clues.medium;
    } else if (currentLevel >= 7) {
        clueText = targetFruit.clues.hard;
    }

    document.getElementById('question-text').textContent = `"${clueText}"`;

    // Update UI Indicators
    document.getElementById('current-level-disp').textContent = currentLevel;
    document.getElementById('q-current').textContent = currentQuestionIndex; // 1-based because incremented above
    document.getElementById('q-total').textContent = questionsPerRound;

    let options = [targetFruit];
    while (options.length < 4) {
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        if (!options.includes(randomFruit)) {
            options.push(randomFruit);
        }
    }

    options = options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    options.forEach(fruit => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerHTML = `
            <span class="emoji-icon">${fruit.emoji}</span>
            <span class="fruit-name">${fruit.name}</span>
        `;
        btn.onclick = () => checkAnswer(fruit);
        container.appendChild(btn);
    });
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop previous
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID'; // Try Indonesian
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

function checkAnswer(selectedFruit) {
    playClickSound();

    document.getElementById('game').classList.remove('active');
    document.getElementById('game').style.display = 'none';

    const fbView = document.getElementById('feedback-view');
    fbView.style.display = 'flex';
    fbView.classList.add('active');
    document.getElementById('hint-btn').classList.add('hidden'); // Hide hint

    if (selectedFruit.id === targetFruit.id) {
        // CORRECT
        currentScore += 10;
        updateHighScore();
        document.getElementById('score').textContent = currentScore;

        // Speak the fruit name
        speakText(targetFruit.name);

        document.getElementById('feedback-icon').textContent = targetFruit.emoji;
        document.getElementById('feedback-title').textContent = "Yeay Benar! 🎉";
        document.getElementById('feedback-title').style.color = "#00b894";
        document.getElementById('feedback-desc').textContent = `Hebat! Itu adalah ${targetFruit.name}`;
    } else {
        // WRONG -> Proceed anyway (Show correct answer)
        document.getElementById('feedback-icon').textContent = "😢"; // Or targetFruit.emoji to show what it was? Let's show target.
        document.getElementById('feedback-icon').textContent = targetFruit.emoji;

        document.getElementById('feedback-title').textContent = "Yah, Salah... 😅";
        document.getElementById('feedback-title').style.color = "#ff7675";
        document.getElementById('feedback-desc').textContent = `Yang benar adalah ${targetFruit.name}`;
    }
}



function exitToLevelSelect() {
    isGameActive = false;
    document.getElementById('game').classList.remove('active');
    document.getElementById('game').style.display = 'none';

    document.getElementById('feedback-view').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';

    document.getElementById('level-select').style.display = 'flex';
    document.getElementById('level-select').classList.add('active');
}

function endGame() {
    isGameActive = false;
    updateHighScore(); // Ensure high score is saved/updated at end

    document.getElementById('game').style.display = 'flex';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('game-over').style.display = 'block';

    document.getElementById('feedback-view').style.display = 'none';
    document.getElementById('final-score').textContent = currentScore;
    document.getElementById('final-high-score').textContent = highScore;
}

function goHome() {
    window.location.reload();
}
