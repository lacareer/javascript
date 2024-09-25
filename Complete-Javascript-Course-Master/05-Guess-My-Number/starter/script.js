'use strict';

// class selector is dot(.) and id pan(#)

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Generates a number between 1 and 20
// trunc rounds of the the rando, number to a whole number
let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no guess number entered
  if (!guess) {
    document.querySelector('.message').textContent = ' No number!';

    //when the guess is  correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🎉 Number is too high' : '🎉 Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎉 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // refactored above and not needed anymore
  //when the guess is higher that the random number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🎉 Number is too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🎉 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when the guess is lower that the random number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🎉 Number is too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🎉 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// coding challenge #1

const resetButton = () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
};
document.querySelector('.again').addEventListener('click', resetButton);
