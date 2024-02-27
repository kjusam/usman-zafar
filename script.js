// script.js

document.addEventListener('DOMContentLoaded', function () {
    const playIcons = document.querySelectorAll('.fa-play');
    const pauseIcons = document.querySelectorAll('.fa-pause');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const progressBar = document.getElementById('progress-bar');
    const songNameElement = document.querySelector('.song-name');
    const songSources = [
        'music/song1.mp3',
        'music/song2.mp3',
        'music/song3.mp3'
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    const audio = new Audio(); // Create an Audio object

    function playSong(index) {
        const songSrc = songSources[index];
        songNameElement.textContent = `Song ${index + 1}`;
        audio.src = songSrc; // Set the source of the audio element
        audio.play(); // Play the audio
        isPlaying = true;
    }

    function pauseSong() {
        audio.pause(); // Pause the audio
        isPlaying = false;
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong(currentSongIndex);
        }
        updatePlayPauseIcons();
    }

    function updatePlayPauseIcons() {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }

    playIcons.forEach((playIcon, index) => {
        playIcon.addEventListener('click', () => {
            currentSongIndex = index;
            playSong(currentSongIndex);
            updatePlayPauseIcons();
        });
    });

    pauseIcons.forEach(pauseIcon => {
        pauseIcon.addEventListener('click', () => {
            pauseSong();
            updatePlayPauseIcons();
        });
    });

    playIcon.addEventListener('click', togglePlayPause);
    pauseIcon.addEventListener('click', togglePlayPause);
});
