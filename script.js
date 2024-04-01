'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

const changeBackground = color =>
  (document.querySelector('body').style.backgroundColor = color);

const secretNumberWidth = width =>
  (document.querySelector('.number').style.width = width);

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

const num = document.querySelector('.guess');

const check = function () {
  const guess = Number(num.value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);

    changeBackground('#60b347');

    secretNumberWidth('30rem');
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? `${guess} is 📈Too high!`
          : `${guess} is 📉Too low!`
      );
      score--;
      displayScore(score);
      num.value = '';
    } else {
      displayMessage('🛑 You lost the game!');
      displayScore(0);
    }
  }
};

num.addEventListener('keypress', e => {
  if (e.key === 'Enter') check();
});

document.querySelector('.check').addEventListener('click', check);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayNumber('?');
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  changeBackground('#222');
  secretNumberWidth('15rem');
});
