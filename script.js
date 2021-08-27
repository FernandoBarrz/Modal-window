'use strict';
// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Callback for the event listeners
const displayModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('You clicked');
};

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Iterate over the selectors to attach an event listener

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', displayModal);
}
btnCloseModal.addEventListener('click', hideModal);
