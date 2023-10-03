'use strict';
/* Global variables*/
const r = document.querySelector(':root');

const topbarBackground = document.querySelector('.topbar-background');

const backgroundImg = document.querySelector('.background-image');

const cover = document.querySelector('.image-cover');

const topbarContent = document.querySelector('.topbar-content');

const trackHead = document.querySelector('.track-header');

const contentHeading = document.querySelector('.content-heading');

topbarBackground.style.opacity = 0;
r.style.setProperty('--main-color', '#2B363A');

const mainView = document.querySelector('#main-view');

let offset = trackHead.offsetTop;

mainView.addEventListener('scroll', () => {
    let verScroll = mainView.scrollTop;
    //console.log(verScroll);
    backgroundImg.style.backgroundSize = (100 - verScroll * 0.01) + '%';
    cover.style.opacity = verScroll * 0.003 + 0.5;
    let minHeight = parseFloat(getComputedStyle(contentHeading).getPropertyValue('height'));
    console.log(minHeight);;
    if (verScroll >= minHeight) {
        topbarBackground.style.opacity = 1;
        topbarContent.style.opacity = 1;
    }
    else {
        topbarBackground.style.opacity = 0;
        topbarContent.style.opacity = 0;
    }

    if (trackHead.offsetTop > offset) {
        trackHead.style.backgroundColor = '#1A1A1A';
    }
    else {
        trackHead.style.backgroundColor = 'transparent';
    }
});