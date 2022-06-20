// Get the video
var video = document.getElementById("vid-walter");

// Get the button
var btn = document.getElementById("vid-botao");

// Pause and play the video, and change the button text
function pausar() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
