'use strict';
const trackCover = document.getElementById('track-cover');
const trackInfo = document.getElementById('track-info');
const playButton = document.getElementById('play-btn');
const audio = document.getElementById('track-audio');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const currTime = document.getElementById('current-time');
const nextBtn = document.getElementById('next-song-btn');

const volBar = document.getElementById('volume-bar');
const vol = document.getElementById('volume');

let isPlaying = false;

// const songList = [
//     '../media/Some Thing Just Like This.mp3',
//     "../media/We Don't Talk Anymore.mp3"
// ]

let currentSong = 0;

// handling songs

function loadTrack(preDir, track) {
    trackCover.innerHTML = `<img src="${preDir}${track.cover}">`;
    trackInfo.innerHTML = `
    <span>${track.name}</span>
    <span>${track.artist}</span>`;
    audio.src = `${preDir}${track.path}`;
}


function playSong() {
    playButton.children[0].src = '../assets/pause-button.svg';
    audio.play();
}

function pauseSong() {
    playButton.children[0].src = '../assets/play-button.svg';
    audio.pause();
}

function updateProcess(e) {
    const { currentTime, duration } = e.target;
    let widthPercent = isNaN(duration) ? '0%' : `${(currentTime / duration) * 100}%`;
    progress.style.width = widthPercent;
    currTime.innerText = timeFormat(currentTime);
}

function setProcess(e) {
    const offset = e.offsetX;
    const width = this.clientWidth;
    const duration = audio.duration;
    if(isNaN(duration)) return;
    audio.currentTime = (offset / width) * duration;
}

function timeFormat(total) {
    total = Math.floor(total);
    let sec = total % 60;
    let mins = (total - sec) / 60;
    sec = sec < 10 ? `0${sec}` : sec;
    mins = mins < 10 ? `0${mins}` : mins;
    return `${mins}:${sec}`;
}

audio.addEventListener('timeupdate', updateProcess);
audio.addEventListener('loadedmetadata', () => {
    document.getElementById('duration-time').innerText = `${timeFormat(audio.duration)}`;
    console.log('loaded');
})

progressBar.addEventListener('click', setProcess);

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        playSong();
    }
    else {
        pauseSong();
    }
    isPlaying = !isPlaying;
});

// handling volume
function initVolume() {
    const vol_val = audio.volume;
    vol.style.width = `${vol_val * 100}%`;
}

function setVolume(e) {
    const width = this.clientWidth;
    const offset = e.offsetX;
    vol.style.width = `${(offset / width) * 100}%`;
    audio.volume = offset / width;
}

volBar.addEventListener('click', setVolume);
audio.addEventListener('play', initVolume);
