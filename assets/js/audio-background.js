const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing');
    } else {
        audio.pause();
        playButton.classList.remove('playing');
    }
});

audio.addEventListener('play', function () {
    playButton.classList.add('playing');
});

audio.addEventListener('pause', function () {
    playButton.classList.remove('playing');
});