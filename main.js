// Get the video
var video = document.getElementById("vid-walter");



video.addEventListener('click', () =>{
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pausar";
  } else {
    video.pause();
    btn.innerHTML = "Reproduzir";
  }
});

