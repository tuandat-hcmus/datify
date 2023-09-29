'use strict';
// Global variable
let r = document.querySelector(':root');

// Playlist constructor function
function Playlist(name, content, img, dir){
    this.title = name;
    this.content = content;
    this.coverImg = `/img/cover/playlists/${img}`;
    this.link = `/html/list/${dir}`;
    this.shortenContent = function() {
        let res = content;
        if(res.length > 30){
            res = res.substring(0, 30) + '...';
        }
        return res;
    };
}

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

const playlistsArr = [
    new Playlist("Today's top hits", 'Jungkook is on top of the hottest 50', 'Today-top-hits.jpg', 'Today-Top-Hits.html'),
    new Playlist('All out 2010s', 'The biggest songs of 2010s', 'AllOut2010s.jpg', '/'), 
    new Playlist('RapCaviar', 'New music from Doja Cat, Lil Tecca and Moneybagg Yo', 'RapCaviar.jpg', '/'),
    new Playlist('Mega Hit Mix', 'A mega mix of 75 favorites from the last few years!', 'MegaHitMix.jpg', '/'),
    new Playlist('Rock Classics', 'Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters', 'RockClassics.jpg', '/'),
    new Playlist('Chill Hits', 'Kick back to the best new and recent chill hits.', 'ChillHits.jpg', '/'),
    new Playlist('Viva Latino', "Today's top Latin hits, elevando nuestra música.", 'VivaLatino.jpg', '/'),
    new Playlist('All Out 80s', 'The biggest songs of the 1980s. Cover: Michael Jackson.', 'AllOut80s.jpg', '/')
];

console.log(playlistsArr);

const focusArr = [
    new Playlist('Peaceful Piano', 'Peaceful piano to help you slow down, breathe, and relax.', 'PeacefulPiano.jpg'),
    new Playlist('Deep Focus', 'Keep calm and focus with ambient and post-rock music.', 'DeepFocus.jpg'),
    new Playlist('Instrumental Study', 'Focus with soft study music in the background.', 'InstrumentalStudy.jpg'),
    new Playlist('Focus Flow', 'Uptempo instrumental hip hop beats.', 'FocusFlow.jpg'),
    new Playlist('Beats to think to', 'Focus with melodic techno and tech house.', 'Beats-to-think-to.jpg'),
    new Playlist('Reading adventure', 'Scores and soundtracks for daring quests, epic journeys, and the greatest reading adventures.', 'ReadingAdventure.jpg'),
    new Playlist('Quiet Moment', 'Gentle classical music to help you relax and reflect.', 'QuietMoment.jpg')
];


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

let rands = getRandNums(cardCount - 1, 1, playlistsArr.length);
//console.log(rands);
for(let i = 0; i < rands.length; i++){
    playlistContainer.appendChild(createPlaylistCard(playlistsArr[rands[i]], '.'));
}

// add click event to each card

playlistContainer.children[0].addEventListener('click', () => {
    window.location.href = '.' + playlistsArr[0].link;
});

for(let i = 1; i < playlistContainer.children.length; i++) {
    playlistContainer.children[i].addEventListener('click', () => {
        window.location.href = '.' + playlistsArr[rands[i]].link;
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
console.log(cardList);