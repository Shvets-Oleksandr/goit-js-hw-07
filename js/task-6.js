'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');


const createBoxes = (amount) => {
  
  const boxArray = [];
  let size = 30;

   for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxArray.push(box);
  }
    
  boxesEl.append(...boxArray);
};

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

controlsEl.children[1].addEventListener('click', () => {
  const amount = Number.parseInt(controlsEl.children[0].value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    controlsEl.children[0].value = '';
  }
  
});

controlsEl.children[2].addEventListener('click', destroyBoxes);

