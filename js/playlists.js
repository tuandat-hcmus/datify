
for (let i = 0; i < playlistArr.length; i++) {
    playlistArr[i].shortenContent = function () {
        let res = this.content;
        if (res.length > 30) {
            res = res.substring(0, 30) + '...';
        }
        return res;
    }
}

for (let i = 0; i < focusArr.length; i++) {
    focusArr[i].shortenContent = function () {
        let res = this.content;
        if (res.length > 30) {
            res = res.substring(0, 30) + '...';
        }
        return res;
    }
}

// console.log(playlistArr);

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

const playlistContainer = document.querySelector('#playlists-container');
const focusContainer = document.querySelector('#focus-container');

if (playlistContainer !== null) {
    playlistArr.forEach((item) => {
        playlistContainer.appendChild(createPlaylistCard(item, '../..'));
    })
}

if (focusContainer !== null) {
    focusArr.forEach((item) => {
        focusContainer.appendChild(createPlaylistCard(item, '../..'));
    });
}
