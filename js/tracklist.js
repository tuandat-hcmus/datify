'use strict';

let r = document.querySelector(':root');

let topbarBackground = document.querySelector('.topbar-background');

let backgroundImg = document.querySelector('.background-image');

let cover = document.querySelector('.image-cover');

let topbarContent = document.querySelector('.topbar-content');

topbarBackground.style.opacity = 0;
r.style.setProperty('--main-color', '#2B363A');

let mainView = document.querySelector('#main-view');
mainView.addEventListener('scroll', () => {
    let verScroll = mainView.scrollTop;
    console.log(mainView.scrollTop);
    backgroundImg.style.backgroundSize = (100 - verScroll * 0.01) + '%';
    cover.style.opacity = verScroll * 0.003 + 0.5;
    if(verScroll >= 300) {
        topbarBackground.style.opacity = 1;
        topbarContent.style.opacity = 1;
    }
    else {
        topbarBackground.style.opacity = 0;
        topbarContent.style.opacity = 0;
    }
});