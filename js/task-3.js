'use strict';

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    const inputTrimed = event.currentTarget.value.trim();
    outputEl.textContent = inputTrimed;
    if (inputTrimed === '') {
        outputEl.textContent = 'Anonymous';
    }
});
