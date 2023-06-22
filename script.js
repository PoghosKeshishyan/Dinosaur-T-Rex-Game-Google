const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let interval;

document.addEventListener('keydown', function () {
    if (cactus.classList != 'active') {
        cactus.classList.add('active');
    }

    jump();
})

function jump() {
    const audio = document.createElement('audio');
    audio.src = './sounds/jump.mp3';
    audio.autoplay = true;

    if (dino.classList != 'jump') {
        dino.className = 'jump';
    }

    setTimeout(function () {
        dino.className = '';
    }, 300)
}

interval = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game over!!!');
        window.location.reload();
    }
}, 10)