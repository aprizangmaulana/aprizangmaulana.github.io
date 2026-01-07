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
let currentScore = 0;
let currentQuestionIndex = 0;
let isGameActive = false;
let targetFruit = null;
let currentLevel = 1;
const questionsPerRound = 10; // Increased to 10

function enterGame() {
    const bgm = document.getElementById('bgm');
    if (bgm && bgm.paused) {
        bgm.volume = 0.3;
        bgm.play().catch(e => console.log("Auto-play prevented", e));
    }

    document.getElementById('start').classList.remove('active');
    document.getElementById('start').style.display = 'none';

    document.getElementById('level-select').style.display = 'flex';
    document.getElementById('level-select').classList.add('active');

    generateLevels();
}

function showStartScreen() {
    document.getElementById('level-select').classList.remove('active');
    document.getElementById('level-select').style.display = 'none';

    document.getElementById('start').style.display = 'flex';
    document.getElementById('start').classList.add('active');
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
    currentLevel = level;
    document.getElementById('level-select').classList.remove('active');
    document.getElementById('level-select').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    document.getElementById('game').classList.add('active');
    startGame();
}

function toggleMusic() {
    const bgm = document.getElementById('bgm');
    const btn = document.getElementById('music-btn');
    if (bgm && btn) {
        if (bgm.paused) {
            bgm.play();
            btn.textContent = '🎵';
            btn.classList.remove('muted');
        } else {
            bgm.pause();
            btn.textContent = '🔇';
            btn.classList.add('muted');
        }
    }
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

function checkAnswer(selectedFruit) {
    if (selectedFruit.id === targetFruit.id) {
        currentScore += 10;
        document.getElementById('score').textContent = currentScore;

        document.getElementById('game').classList.remove('active');
        document.getElementById('game').style.display = 'none';

        const fbView = document.getElementById('feedback-view');
        fbView.style.display = 'flex';
        fbView.classList.add('active');

        document.getElementById('feedback-icon').textContent = targetFruit.emoji;
        document.getElementById('feedback-title').textContent = "Yeay Benar! 🎉";
        document.getElementById('feedback-title').style.color = "#00b894";
        document.getElementById('feedback-desc').textContent = `Itu adalah ${targetFruit.name}`;
    } else {
        const container = document.getElementById('options-container');
        container.style.animation = 'shake 0.5s';
        setTimeout(() => container.style.animation = '', 500);

        const originalText = document.getElementById('question-text').textContent;
        document.getElementById('question-text').textContent = "Salah! Coba lagi ya 😅";
        document.getElementById('question-text').style.color = "#ff7675";

        setTimeout(() => {
            document.getElementById('question-text').textContent = originalText;
            document.getElementById('question-text').style.color = "";
        }, 1000);
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
    document.getElementById('game').style.display = 'flex';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('feedback-view').style.display = 'none';
    document.getElementById('final-score').textContent = currentScore;
}

function goHome() {
    window.location.reload();
}
