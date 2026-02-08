const audio = document.getElementById("audio");

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}
function nextSong() {
  audio.src = "songs/song2.mp3";
    audio.play();
}
function prevSong() {
  audio.src = "songs/song1.mp3";
    audio.play();
}