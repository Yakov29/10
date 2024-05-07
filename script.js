let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Повідомлення ${count}`);
    
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Інтервал зупинено.");
    }
}, 1000);

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const elements = [];
for (let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.classList.add('animated-element');
    container.appendChild(element);
    elements.push(element);
}

let animationCount = 0;
const animationInterval = setInterval(() => {
    animationCount++;
    elements.forEach(element => {
        element.style.width = `${50 + animationCount}px`;
        element.style.height = `${50 + animationCount}px`;
    });
    
    if (animationCount === 5) {
        clearInterval(animationInterval);
        console.log("Анімація завершена.");
    }
}, 1000);

const gameContainer = document.createElement('div');
gameContainer.id = 'game-container';
document.body.appendChild(gameContainer);

let score = 0;
const scoreDisplay = document.createElement('p');
scoreDisplay.innerHTML = `Очки: <span id="score">${score}</span>`;
gameContainer.appendChild(scoreDisplay);

function increaseScore() {
    score++;
    document.getElementById('score').textContent = score;
}

function createGameElement() {
    const element = document.createElement('div');
    element.classList.add('game-element');
    element.style.left = `${Math.random() * 500}px`;
    element.style.top = `${Math.random() * 500}px`;
    element.addEventListener('click', () => {
        increaseScore();
        gameContainer.removeChild(element);
    });
    gameContainer.appendChild(element);
}

setInterval(createGameElement, 1000);

const userInput = prompt("Введіть час у секундах:");

if (userInput !== null) {
    const timeInSeconds = parseInt(userInput);
    
    if (!isNaN(timeInSeconds)) {
        setTimeout(() => {
            console.log("Час вийшов!");
        }, timeInSeconds * 1000);
    } else {
        console.log("Невірний формат часу.");
    }
} else {
    console.log("Введення скасовано.");
}