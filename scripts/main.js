// Pegar elemento de video e formulário de doação  - Felipe D
const video = document.getElementById("vid-walter");

//Evento só é adicionado se encontrar o elemento em questão - Felipe D
if(video)
{
	//Adicionar elemento de click que faz o vídeo pausar ou voltar a reproduzir - Felipe D
	video.addEventListener('click', () =>{
		video.paused ? video.play() : video.pause();
	});
}




