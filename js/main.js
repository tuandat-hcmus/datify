'use strict';

/* global variables */
const topbarBackground = document.querySelector('.topbar-background');

const r = document.querySelector(':root');

const playlistContainer = document.querySelector('#playlists-container');

const focusContainer = document.querySelector('#focus-container');

r.style.setProperty('--main-color', 'rgb(70, 13, 16');

topbarBackground.style.opacity = 0;

playlistArr.forEach(item => {
    item.shortenContent = function() {
        let res = item.content;
        if(res.length > 30) {
            res = res.substring(0, 30) + '...';
        }
        return res;
    }
});

focusArr.forEach(item => {
    item.shortenContent = function() {
        let res = item.content;
        if(res.length > 30) {
            res = res.substring(0, 30) + '...'
        }
        return res;
    }
});

function createItem(preDir, obj, id) {
    const item = document.createElement('div');
    item.setAttribute('data-color', obj.color);
    item.classList.add('item');
    item.innerHTML = `<img src="${preDir}${obj.cover}" alt="">
    <div class="right">
        <span>${obj.name}</span>
        <button data-id="${id}" class="play-btns">
            <img src="${preDir}/assets/play-button.svg" alt="">
        </button>
    </div>`
    return item;
}

function createPlaylistCard(playlist, preDir) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="card-cover">
        <div>
            <img src="${preDir}${playlist.coverImg}" alt="">
        </div>
        <button>
            <img src="${preDir}/assets/play-button.svg" alt="">
        </button>
    </div>
    <div class="card-content">
        <h2>${playlist.title}</h2>
        <p>${playlist.shortenContent()}</p>
    </div>`;
    return card;
}

function getRandNums(num, min, max) {
    let ans = [];
    while(ans.length < num) {
        let x = Math.floor(Math.random() * (max - min) + min);
        if(ans.indexOf(x) == -1){
            ans.push(x);
        }
    }
    return ans;
}

let rands = getRandNums(6, 0, 10);

const recomList = document.querySelector('.recommended-list');
for(let i = 0; i < rands.length; i++) {
    recomList.appendChild(createItem('..', trackArr[rands[i]], rands[i]));
}

rands = getRandNums(5, 1, playlistArr.length);
for(let i = 0; i < rands.length; i++) {
    playlistContainer.appendChild(createPlaylistCard(playlistArr[rands[i]], '../'));
}

rands = getRandNums(5, 1, focusArr.length);
for(let i = 0; i < rands.length; i++) {
    focusContainer.appendChild(createPlaylistCard(focusArr[rands[i]], '../'));
}

// add mouse events
const itemList = document.querySelectorAll('.item');
itemList.forEach(item => {
    item.addEventListener('mouseover', function() {
        document.querySelector('#underbackground').style.backgroundColor = item.getAttribute('data-color');
    });

    item.addEventListener('mouseout', function() {
        document.getElementById('underbackground').style.backgroundColor = 'rgb(176, 32, 40)';
    })
});

// scroll event
const mainView = document.getElementById('main-view');
mainView.addEventListener('scroll', () => {
    document.querySelector('.topbar-background').style.opacity = mainView.scrollTop / 200;
});


const playButtons = document.querySelectorAll('.play-btns');
playButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        let index = this.getAttribute('data-id');
        index = parseInt(index);
        loadTrack('..', trackArr[index]);
        playSong();
    })
})