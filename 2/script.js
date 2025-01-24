const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const audio = document.getElementById('audio');
const volumeControl = document.getElementById('volumeControl');
const playlistContainer = document.getElementById('playlist');
const addTrackBtn = document.getElementById('addTrackBtn');

let currentTrackIndex = 0;
let playlist = [
    { title: 'Track 1', url: 'track1.mp3' },
    { title: 'Track 2', url: 'track2.mp3' },
    { title: 'Track 3', url: 'track3.mp3' },
];

function loadTrack(index) {
    const track = playlist[index];
    document.getElementById('audioSource').src = track.url;
    audio.load();
}

function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playBtn.textContent = 'Play';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function updateVolume() {
    audio.volume = volumeControl.value;
}

function addTrack() {
    const trackTitle = prompt('Enter track title:');
    const trackUrl = prompt('Enter track URL:');
    playlist.push({ title: trackTitle, url: trackUrl });
    const li = document.createElement('li');
    li.textContent = trackTitle;
    playlistContainer.appendChild(li);
}

playBtn.addEventListener('click', playPauseTrack);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
volumeControl.addEventListener('input', updateVolume);
addTrackBtn.addEventListener('click', addTrack);

// Initialize
loadTrack(currentTrackIndex);
