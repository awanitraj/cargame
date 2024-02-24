const car = document.getElementById('car');
const obstacle = document.getElementById('obstacle');
let score = 0;

document.addEventListener('keydown', moveCar);

function moveCar(event) {
    if (event.key === 'ArrowLeft') {
        car.style.left = `${parseInt(car.style.left, 10) - 10}px`;
    } else if (event.key === 'ArrowRight') {
        car.style.left = `${parseInt(car.style.left, 10) + 10}px`;
    }
}

function checkCollision() {
    const carRect = car.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        carRect.left < obstacleRect.right &&
        carRect.right > obstacleRect.left &&
        carRect.top < obstacleRect.bottom &&
        carRect.bottom > obstacleRect.top
    ) {
        endGame();
    }
}

function endGame() {
    alert(`Game over! Your score is ${score}.`);
    score = 0;
    obstacle.style.animationDuration = '2s';
}

function increaseScore() {
    score++;
    obstacle.style.animationDuration = `${2 - score * 0.1}s`;
}

setInterval(() => {
    checkCollision();
    increaseScore();
}, 100);
