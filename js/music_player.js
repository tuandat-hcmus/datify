'use strict';

const playButton = document.getElementById('play-btn');

const audio = document.getElementById('track-audio');
const progress = document.getElementById('progress');
const currTime = document.getElementById('current-time');
const nextBtn = document.getElementById('next-song-btn');

let isPlaying = false;

const songList = [
    '../media/Some Thing Just Like This.mp3',
    "../media/We Don't Talk Anymore.mp3"
]

let curretSong = 0;

playButton.addEventListener('click', () => {
    if(!isPlaying) {
        playButton.children[0].src = '../assets/pause-button.svg';
        audio.play();
    }
    else {
        playButton.children[0].src = '../assets/play-button.svg';
        audio.pause();
    }
    isPlaying = !isPlaying;
})

function playSong() {

}

function updateProcess() {
    const {currentTime, duration} = audio;
    let widthPercent = isNaN(duration)? '0%':`${(currentTime / duration) * 100}%`;
    progress.style.width = widthPercent;
    currTime.innerText = timeFormat(currentTime);
}

function timeFormat(total) {
    total = Math.floor(total);
    let sec = total % 60;
    let mins = (total - sec) / 60;
    sec = sec < 10? `0${sec}` : sec;
    mins = mins < 10? `0${mins}` : mins;
    return `${mins}:${sec}`;
}



audio.addEventListener('timeupdate', updateProcess);
audio.addEventListener('loadedmetadata', () => {
    document.getElementById('duration-time').innerText = `${timeFormat(audio.duration)}`;
    console.log('loaded');
})

nextBtn.addEventListener('click', () => {
    curretSong = curretSong < songList.length - 1? curretSong + 1: 0;
    audio.src = songList[curretSong];
    updateProcess();
})