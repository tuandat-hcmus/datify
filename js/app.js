'use strict';
// Global variable
let r = document.querySelector(':root');

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


function createPlaylistCard(playlist, preDir) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="card-cover">
        <div>
            <img src="${preDir}${playlist.coverImg}" alt="">
        </div>
        <button>
            <img src="./assets/play-button.svg" alt="">
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

const playlistContainer = document.querySelector('#playlists-container');

const focusContainer = document.querySelector('#focus-container');

let cardCount = getComputedStyle(r).getPropertyValue('--columns');
//console.log(cardCount);

let rands = getRandNums(cardCount - 1, 1, playlistArr.length);
//console.log(rands);
for(let i = 0; i < rands.length; i++){
    playlistContainer.appendChild(createPlaylistCard(playlistArr[rands[i]], '.'));
}

// add click event to each card

playlistContainer.children[0].addEventListener('click', () => {
    window.location.href = '.' + playlistArr[0].link;
});

for(let i = 1; i < playlistContainer.children.length; i++) {
    playlistContainer.children[i].addEventListener('click', () => {
        window.location.href = '.' + playlistArr[rands[i]].link;
    });
}

rands = getRandNums(cardCount - 1, 1, focusArr.length);
//console.log(rands);
for(let i = 0; i < rands.length; i++){
    focusContainer.appendChild(createPlaylistCard(focusArr[rands[i]], '.'));
}

// store playlists into local file
localStorage.setItem('playlists', JSON.stringify(playlistsArr));
localStorage.setItem('focus', JSON.stringify(focusArr));

const cardList = document.querySelectorAll('.card');