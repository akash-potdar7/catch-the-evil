var score = 0;
var playground = document.querySelector('canvas');
playground.height = 300;
playground.width = 300;
playground.style.border = '1px solid';
const ctx = playground.getContext('2d');

let player_pos_x = 20,
    player_pos_y = 50,
    player_height = 12,
    player_width = 12;

let evil_pos_x = Math.floor(Math.random() * 250),
    evil_pos_y = Math.floor(Math.random() * 250),
    evil_height = 50,
    evil_width = 50;

ctx.fillStyle = 'red';
ctx.fillRect(player_pos_x, player_pos_y, player_height, player_width);

ctx.strokeRect(evil_pos_x, evil_pos_y, evil_height, evil_width);

function step() {
    ctx.clearRect(0, 0, playground.height, playground.width);
    ctx.fillStyle = 'red';
    ctx.fillRect(player_pos_x, player_pos_y, player_height, player_width);

    ctx.strokeRect(evil_pos_x, evil_pos_y, evil_height, evil_width);

    if (player_pos_x >= evil_pos_x && player_pos_y >= evil_pos_y) {
        if (player_pos_x <= evil_pos_x + evil_width &&
            player_pos_y <= evil_pos_y + evil_height) {
            score += 5;
            evil_pos_x = Math.floor(Math.random() * 250);
            evil_pos_y = Math.floor(Math.random() * 250);
            document.getElementById('score').innerText = score;
        }
    }
    window.requestAnimationFrame(step);
}

function handleInput(event) {
    const key = event.key;
    switch (key) {
        case 'w':
            player_pos_y -= 5;
            break;
        case 'a':
            player_pos_x -= 5;
            break;
        case 's':
            player_pos_y += 5;
            break;
        case 'd':
            player_pos_x += 5;
            break;
    }
}

document.addEventListener('keypress', handleInput);
window.requestAnimationFrame(step);
