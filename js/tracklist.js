'use strict';

let r = document.querySelector(':root');

let topbarBackground = document.querySelector('.topbar-background');

let backgroundImg = document.querySelector('.background-image');

topbarBackground.style.opacity = 0;

let mainView = document.querySelector('#main-view');
mainView.addEventListener('scroll', () => {
    console.log(mainView.contentWindow.pageYOffset);
});