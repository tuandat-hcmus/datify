'use strict';
/*GLOBAL VARIABLES */
const loginForm = document.getElementById('login-form');

const visibleButton = document.getElementById('hide-pass-button');

let formInput = document.getElementsByClassName('container');

visibleButton.addEventListener('click', () => {
    let imgSrc = visibleButton.childNodes[0].getAttribute('src');
    if (imgSrc == './assets/hidden-pass.svg') {
        imgSrc = './assets/show-pass.svg';
        loginForm.psw.type = 'text';
    } else {
        imgSrc = './assets/hidden-pass.svg';
        loginForm.psw.type = 'password';
    }
    visibleButton.childNodes[0].setAttribute('src', imgSrc);
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let usn = event.target.username.value;
    let psw = event.target.psw.value;
    if (usn == '' || psw == '') {
        let r = document.querySelector(':root');
        r.style.setProperty('--border-color-hover', 'red');
        for (let i = 0; i < formInput.length; i++) {
            formInput[i].style.borderColor = 'red';
        }
        let fillError = document.getElementById('fill-error');
        fillError.textContent = 'Please fill username and password'
    }
    else {
        window.localStorage.setItem('username', usn);
        window.location.href = './index_#.html';
    }
});

