// Pegar elemento de video
var video = document.getElementById("vid-walter");



//Adicionar elemento de click que faz o vídeo pausar ou voltar a reproduzir
video.addEventListener('click', () =>{

  video.paused ? video.play() : video.pause();
});

