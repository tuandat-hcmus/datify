'use strict';

/* global variables */
const topbarBackground = document.querySelector('.topbar-background');

const r = document.querySelector(':root');

const playlistContainer = document.querySelector('#playlists-container');

const focusContainer = document.querySelector('#focus-container');

r.style.setProperty('--main-color', 'rgb(70, 13, 16');

topbarBackground.style.opacity = 0;

// playlist array
const playlistArr = JSON.parse(localStorage.getItem('playlists'));
const focusArr = JSON.parse(localStorage.getItem('focus'));

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
})

function Track(name, cover, color) {
    this.name = name;
    this.cover = `/img/cover/album/${cover}`;
    this.color = color;
}

function createItem(preDir, obj) {
    const item = document.createElement('div');
    item.setAttribute('data-color', obj.color);
    item.classList.add('item');
    item.innerHTML = `<img src="${preDir}${obj.cover}" alt="">
    <div class="right">
        <span>${obj.name}</span>
        <button>
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

const trackArr = [
    new Track('Seven (ft.Latto)', 'Seven.jpg', '#fff'),
    new Track('Just The Way you are', 'Doo-Wops&Hooligans.jpg', '#FABD22'),
    new Track("We don't talk anymore", 'NineTrackMind.jpg', '#F6E614'),
    new Track('Something Just Like This', 'Memories.jpg', '#954F3F'),
    new Track('One Thing', 'UpAllNight.jpg', '#A46749'),
    new Track('Let Me Down Slowly', 'NarratedForYou.jpg', '#F5A06C'),
    new Track('Sugar', 'V.jpg', '#BD2A48'),
    new Track('Uptown Funk', 'UptownSpecial.jpg', '#fff'),
    new Track('Treat You Better', 'Illuminate.jpg', '#306C97'),
    new Track('Love Yourself', 'Purpose.jpg', '#4C4C4C')
];

const recomList = document.querySelector('.recommended-list');
for(let i = 0; i < rands.length; i++) {
    recomList.appendChild(createItem('..', trackArr[rands[i]]));
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

