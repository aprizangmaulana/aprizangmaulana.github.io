// Sound Manager using Web Audio API
const soundManager = {
    ctx: new (window.AudioContext || window.webkitAudioContext)(),

    playTone: (freq, type, duration) => {
        if (soundManager.ctx.state === 'suspended') soundManager.ctx.resume();
        const osc = soundManager.ctx.createOscillator();
        const gain = soundManager.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, soundManager.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, soundManager.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, soundManager.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(soundManager.ctx.destination);
        osc.start();
        osc.stop(soundManager.ctx.currentTime + duration);
    },

    playCorrect: () => {
        soundManager.playTone(440, 'sine', 0.1);
        setTimeout(() => soundManager.playTone(554, 'sine', 0.1), 100);
        setTimeout(() => soundManager.playTone(659, 'sine', 0.2), 200);
    },

    playWrong: () => {
        soundManager.playTone(300, 'sawtooth', 0.2);
        setTimeout(() => soundManager.playTone(200, 'sawtooth', 0.4), 200);
    },

    playClick: () => {
        soundManager.playTone(800, 'triangle', 0.05);
    },

    playWin: () => {
        [440, 554, 659, 880, 1100].forEach((freq, i) => {
            setTimeout(() => soundManager.playTone(freq, 'square', 0.2), i * 150);
        });
    }
};

const particleManager = {
    stage: null,

    spawn: (x, y, type) => {
        particleManager.stage = document.getElementById('visual-stage');
        if (!particleManager.stage) return;

        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';

        if (type === 'star') {
            p.innerText = '⭐';
            p.style.fontSize = Math.random() * 20 + 20 + 'px';
        } else if (type === 'cloud') {
            p.style.width = Math.random() * 50 + 50 + 'px';
            p.style.height = '30px';
            p.style.background = 'white';
            p.style.borderRadius = '20px';
            p.style.opacity = '0.5';
        }

        // Random movement
        const dx = (Math.random() - 0.5) * 100;
        const dy = (Math.random() - 0.5) * 100;

        p.animate([
            { transform: `translate(0,0) scale(0)` },
            { transform: `translate(${dx}px, ${dy}px) scale(1)`, offset: 0.5 },
            { transform: `translate(${dx}px, ${dy + 50}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        particleManager.stage.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    },

    burst: () => {
        const stage = document.getElementById('visual-stage');
        const rect = stage.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                particleManager.spawn(
                    Math.random() * rect.width,
                    Math.random() * rect.height,
                    'star'
                );
            }, i * 50);
        }
    }
};

const screenManager = {
    show: (screenId) => {
        soundManager.playClick();
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });
        const screen = document.getElementById(screenId);
        screen.classList.remove('hidden');
        screen.classList.add('active');

        if (screenId === 'main-menu') {
            gameManager.stop();
        }
    }
};

const gameManager = {
    currentGame: null,
    currentTopic: null,
    currentDiff: null,
    score: 0,
    questionsAnswered: 0,
    totalQuestions: 10,
    position: 0, // Visual position
    isGameActive: false,

    selectGame: (gameType) => {
        gameManager.currentGame = gameType;
        screenManager.show('topic-select');
    },

    selectTopic: (topic) => {
        gameManager.currentTopic = topic;
        screenManager.show('diff-select');
    },

    startGame: (diff) => {
        gameManager.currentDiff = diff;
        gameManager.score = 0;
        gameManager.questionsAnswered = 0;
        gameManager.isGameActive = true;

        // Reset Visuals
        if (gameManager.currentGame === 'tarik-tambang') gameManager.position = 50;
        if (gameManager.currentGame === 'panjat-pinang') gameManager.position = 0;
        if (gameManager.currentGame === 'lari-karung') gameManager.position = 5;

        document.getElementById('score').innerText = '0';
        gameManager.setupVisuals();
        screenManager.show('gameplay');
        mathEngine.generateProblem();
    },

    stop: () => {
        gameManager.isGameActive = false;
    },

    exit: () => {
        soundManager.playClick();
        if (confirm('Yakin ingin keluar perlombaan?')) {
            screenManager.show('game-select');
        }
    },

    endGame: (completed = false) => {
        gameManager.stop();
        if (completed && gameManager.score >= 70) {
            soundManager.playWin();
            particleManager.burst();
        }

        document.getElementById('result-title').innerText = completed ? "Permainan Selesai!" : "Gagal!";
        document.getElementById('final-score').innerText = gameManager.score + " / 100";
        screenManager.show('result');
    },

    setupVisuals: () => {
        const stage = document.getElementById('visual-stage');
        stage.innerHTML = `
            <div class="cloud" style="top:20px; left:10%"></div>
            <div class="cloud" style="top:50px; left:60%"></div>
            <div class="ground"></div>
        `;

        if (gameManager.currentGame === 'tarik-tambang') {
            stage.innerHTML += `
                <div class="rope-container">
                    <div id="game-marker" class="rope-marker" style="left: 50%"></div>
                </div>
                <!-- Enemy -->
                <div class="decor" style="bottom:90px; left:5%;">👹</div>
                <!-- Player -->
                <div id="player-char" class="character" style="left: 85%; bottom: 80px;"></div>
            `;
        } else if (gameManager.currentGame === 'panjat-pinang') {
            stage.innerHTML += `
                <div class="pole"></div>
                <!-- Player climbs pole -->
                <div id="player-char" class="character" style="left: 50%; bottom: 0; transform: translateX(-50%);"></div>
                <div style="position:absolute; top:20px; left:50%; transform:translateX(-50%); font-size:40px; z-index:5;">🎁</div>
            `;
        } else if (gameManager.currentGame === 'lari-karung') {
            stage.innerHTML += `
                <div style="position:absolute; bottom:90px; right:10px; font-size:40px; z-index:5;">🏁</div>
                <div id="player-char" class="character" style="left: 5%; bottom: 80px;"></div>
            `;
        }
    },

    updateVisuals: (isCorrect) => {
        const char = document.getElementById('player-char');
        const marker = document.getElementById('game-marker');

        // CSS Animation Triggers
        if (char) {
            char.classList.remove('anim-wiggle', 'anim-jump');
            void char.offsetWidth; // trigger reflow

            if (isCorrect) {
                if (gameManager.currentGame === 'lari-karung') char.classList.add('anim-jump');
                else char.classList.add('anim-wiggle');

                // Spawn particles on character
                const rect = char.getBoundingClientRect();
                particleManager.spawn(rect.left + 20, rect.top, 'star');
            }
        }

        // Smooth visual position updates
        if (gameManager.currentGame === 'tarik-tambang') {
            if (marker) marker.style.left = `${gameManager.position}%`;
        } else if (gameManager.currentGame === 'panjat-pinang') {
            if (char) char.style.bottom = `${gameManager.position}%`;
        } else if (gameManager.currentGame === 'lari-karung') {
            if (char) char.style.left = `${gameManager.position}%`;
        }
    },

    handleCorrect: () => {
        soundManager.playCorrect();
        gameManager.score += 10;
        document.getElementById('score').innerText = gameManager.score;

        if (gameManager.currentGame === 'tarik-tambang') {
            gameManager.position = Math.min(90, gameManager.position + 10);
        } else if (gameManager.currentGame === 'panjat-pinang') {
            gameManager.position = Math.min(85, gameManager.position + 10);
        } else if (gameManager.currentGame === 'lari-karung') {
            gameManager.position = Math.min(85, gameManager.position + 10);
        }

        gameManager.updateVisuals(true);

        gameManager.questionsAnswered++;
        if (gameManager.questionsAnswered >= gameManager.totalQuestions) {
            setTimeout(() => gameManager.endGame(true), 1200);
        } else {
            setTimeout(mathEngine.generateProblem, 1000);
        }
    },

    handleWrong: () => {
        soundManager.playWrong();
        if (gameManager.currentGame === 'tarik-tambang') {
            gameManager.position = Math.max(10, gameManager.position - 10);
        }
        if (gameManager.currentGame === 'panjat-pinang') {
            gameManager.position = Math.max(0, gameManager.position - 5);
        }

        gameManager.updateVisuals(false);

        gameManager.questionsAnswered++;
        if (gameManager.questionsAnswered >= gameManager.totalQuestions) {
            setTimeout(() => gameManager.endGame(true), 1000);
        } else {
            setTimeout(mathEngine.generateProblem, 1000);
        }
    }
};

const mathEngine = {
    generateProblem: () => {
        if (!gameManager.isGameActive) return;

        let op = gameManager.currentTopic;
        if (op === 'all') {
            const ops = ['+', '-', 'x', ':'];
            op = ops[Math.floor(Math.random() * 4)];
        }

        const diff = gameManager.currentDiff;
        let n1, n2, ans;
        let max = 10;
        let min = 1;

        // Difficulty Ranges
        if (diff === 'medium') { max = 50; min = 5; }
        if (diff === 'hard') { max = 100; min = 10; }

        if (op === '+') {
            n1 = Math.floor(Math.random() * max) + min;
            n2 = Math.floor(Math.random() * max) + min;
            ans = n1 + n2;
        } else if (op === '-') {
            n1 = Math.floor(Math.random() * max) + min;
            n2 = Math.floor(Math.random() * n1);
            ans = n1 - n2;
        } else if (op === 'x') {
            // Smaller range for mult to avoid huge numbers
            const multMax = diff === 'hard' ? 20 : (diff === 'medium' ? 12 : 9);
            n1 = Math.floor(Math.random() * multMax) + 1;
            n2 = Math.floor(Math.random() * multMax) + 1;
            ans = n1 * n2;
        } else { // Divide
            const divMax = diff === 'hard' ? 15 : 10;
            n2 = Math.floor(Math.random() * divMax) + 2;
            ans = Math.floor(Math.random() * divMax) + 1;
            n1 = n2 * ans;
        }

        document.getElementById('q-num1').innerText = n1;
        document.getElementById('q-op').innerText = op;
        document.getElementById('q-num2').innerText = n2;
        document.getElementById('q-ans').innerText = '?';

        mathEngine.generateOptions(ans);
    },

    generateOptions: (correct) => {
        const container = document.getElementById('options-container');
        container.innerHTML = '';

        let options = [correct];
        const range = gameManager.currentDiff === 'hard' ? 20 : 10;

        while (options.length < 4) {
            let offset = Math.floor(Math.random() * (range * 2)) - range;
            let val = correct + offset;
            if (val >= 0 && !options.includes(val)) {
                options.push(val);
            }
        }

        options.sort(() => Math.random() - 0.5);

        options.forEach(val => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.innerText = val;
            btn.onclick = (e) => {
                const allBtns = document.querySelectorAll('.btn-option');
                allBtns.forEach(b => b.disabled = true);

                if (val === correct) {
                    e.target.classList.add('correct');
                    gameManager.handleCorrect();
                } else {
                    e.target.classList.add('wrong');
                    allBtns.forEach(b => {
                        if (parseInt(b.innerText) === correct) b.classList.add('correct');
                    });
                    gameManager.handleWrong();
                }
            };
            container.appendChild(btn);
        });
    }
};

// Start
screenManager.show('main-menu');
