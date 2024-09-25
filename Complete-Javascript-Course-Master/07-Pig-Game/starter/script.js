'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); //using querySelector
const score1El = document.getElementById('score--1'); //using elementId selector

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

let scores; //stores the total of each player score

let currentScore;

// the first player is 0 and the second player is 1. Read from left to right
let activePlayer;

let playing;

const init = function () {
  scores = [0, 0]; //stores the total of each player score
  currentScore = 0;
  // the first player is 0 and the second player is 1. Read from left to right
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//initailizes variables
init();

// switching a player
const switchPlayer = () => {
  // switch to the next player by assigning a new value to the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0; //sets the current score to 0 before switching players
  activePlayer = activePlayer === 0 ? 1 : 0; //switches players
  currentScore = 0; //resets the score

  // switch the background of the player using JS toggle
  // toggles adds the class if it is ot there and removes it if it is
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // makes sure there a player playing the game
  if (playing) {
    //1. Generate a random number between 1 and 6 each time
    const dice = Math.trunc(Math.random() * 6 + 1);

    //2. Display dice
    diceEl.classList.remove('hidden');
    //manupulating the dice image in html to decide whic is display
    diceEl.src = `dice-${dice}.png`;
    console.log(dice); //just to check that the right dice is displayed

    //3. Check for when 1 is rolled
    if (dice !== 1) {
      //Add dice value to the player score
      currentScore += dice;
      console.log(currentScore);
      //dynamicall assign score to the right player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//event handling when user clicks hold
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add/display player total score on Player number
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. finish the game if player score >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch to the next player
      switchPlayer();
    }
  }
});

//resetting all o/p  when a player want a new game
btnNew.addEventListener('click', init);
