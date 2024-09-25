'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //all button with the class name
console.log(btnsOpenModal); //shows all class/node with the class name  so we can loop through

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // Print ot see the name/spelling of each before usage
  //prints the key that was press
  console.log(e.key);

  // keyboard event names:
  // keydown = fired as soon as you press a key
  // keyup = fired as soon as you stop pressing a key
  // keypress = fired continously as long as your hand is on a key
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
