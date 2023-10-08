'use strict';

const backButton = document.getElementById('previous-btn');
const forwardButton = document.getElementById('forward-btn');

backButton.addEventListener('click', () => {
    history.back();
});

forwardButton.addEventListener('click', () => {
    history.forward();
})