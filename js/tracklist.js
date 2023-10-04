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

// Track constructor function
function Track(name, cover, artist, album, date, duration) {
    this.name = name;
    this.cover = cover;
    this.artist = artist;
    this.album = album;
    this.dayAdded = date;
    this.duration = duration;
}

// Create a track row element
function createTrack(order, preDir, track) {
    let trackRow = document.createElement('div');
    trackRow.className = 'track';
    trackRow.tabIndex = 0;
    trackRow.innerHTML = `<div class="track-play">
    <span>${order}</span>
    <button><img src="${preDir}/assets/play-button.svg" alt=""></button>
    </div>
    <div class="song">
        <img src="${preDir}/img/cover/album/${track.cover}" alt="">
        <div>
            <a href="">${track.name}</a>
            <a href="">${track.artist}</a>
        </div>
    </div>
    <div><a href="">${track.album}</a></div>
    <div>${track.dayAdded}</div>
    <div class="last-cell">
        <button><img src="${preDir}/assets/heart-icon.svg" alt=""></button>
        <span>${track.duration}</span>
        <button><img src="${preDir}/assets/more-option.svg" alt=""></button>
    </div>`;
    return trackRow;
}

// On Scroll Handler
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

// Array of Track

const trackArr = [
    new Track('Seven (feat.Latto)', 'Seven.jpg', 'JungKook', 'Seven (feat. Latto)', '4 days ago', '3:04'),
    new Track('Just The Way you are', 'Doo-Wops&Hooligans.jpg', 'Bruno Mars', 'Doo-Wops & Hooligans', '25 Sep 2023', '3:40'),
    new Track("We don't talk anymore", 'NineTrackMind.jpg', 'Charlie Puth', 'Nine Track Mind', '10 Oct 2015', '3:37'),
    new Track('Something Just Like This', 'Memories.jpg', 'The Chainsmoker, Coldplay', 'Memories... Do Not Open', '7 Apr 2017', '4:07'),
    new Track('One Thing', 'UpAllNight.jpg', 'One Direction', 'Up All Night', '25 May 2012', '3:17'),
    new Track('Let Me Down Slowly', 'NarratedForYou.jpg', 'Alec Benjamin', 'Narrated For You', '16 Nov 2018', '2:49'),
    new Track('Sugar', 'V.jpg', 'Maroon 5', 'V (Asia Tour Edition)', '18 May 2015', '3:55'),
    new Track('Uptown Funk', 'UptownSpecial.jpg', 'Mark Ronson, Bruno Mars', 'Uptown Special', '12 Jan 2015', '4:29'),
    new Track('Treat You Better', 'Illuminate.jpg', 'Shawn Mendes', 'Illuminated', '20 Apr 2017', '3:07'),
    new Track('Love Yourself', 'Purpose.jpg', 'Justin Bieber', 'Purpose (Deluxe)', '13 Nov 2015', '3:53')
];

trackArr.forEach(item => {
    console.log(item);
});

const trackList = document.querySelector('.list-of-tracks');
for (let i = 0; i < trackArr.length; i++) {
    trackList.appendChild(createTrack(i + 1, '../..', trackArr[i]));
}