window.onload = function() {
    let tetris = [];
    let tetrisField = document.querySelector('#tetris-field');
    let scoreField = document.querySelector('.score-field');
    let color = [1, 2, 3, 4, 5];
    let timer;
    let score = 0;
    let flag;

    function init() {
        let x = 9;
        let y = 15;
        for (let i = 0; i < y; i++) {
            tetris[i] = [];
            for(let j = 0; j < x; j++) {
                tetris[i][j] = 0;
            }
        }
    }
    function draw() {
        let out = '';
        for (let i = 0; i < tetris.length; i++) {
            for(let j = 0; j < tetris[i].length; j++) {
                if(tetris[i][j] == 0 || tetris[i][j] == 11) {
                    out += `<div class="white"></div>`;
                } else if (tetris[i][j] == 1 || tetris[i][j] == 12) {
                    out += `<div class="orange"></div>`;
                } else if (tetris[i][j] == 2 || tetris[i][j] == 13) {
                    out += `<div class="airbus"></div>`;
                } else if (tetris[i][j] == 3 || tetris[i][j] == 14) {
                    out += `<div class="airbus2"></div>`;
                } else if (tetris[i][j] == 4) {
                    out += `<div class="algonia"></div>`;
                } else if (tetris[i][j] == 5 || tetris[i][j] == 15) {
                    out += `<div class="alcon"></div>`;
                }
            }
        }
        tetrisField.innerHTML = out;
        scoreField.innerHTML = score;
    }
    function square() {
        function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
        tetris[0][0] = randomInteger(0, color.length);
    }
    function run() {
        draw();
        flag = true;
        for (let i = tetris.length - 1; i >= 0; i--) {
            for(let j = 0; j < tetris[i].length; j++) {
                if(tetris[i][j] < 10) {
                    if(tetris[i][j] != 0) {
                        if(i == tetris.length - 1) {
                            tetris[i][j] = tetris[i][j]+10;
                        } else if(tetris[i+1][j] == 0) {
                            tetris[i+1][j] = tetris[i][j];
                            tetris[i][j] = 0;
                            flag = false;
                        }
                    }
                }
            }
        }
        if(flag) square();
    }
    init();
    draw();
    square();
    document.querySelector('.start').onclick = run;
}