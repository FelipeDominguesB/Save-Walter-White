// Pegar elemento de video e formulário de doação  - Felipe D
const video = document.getElementById("vid-walter");
const formDonate = document.querySelector("#donate-form");

/*  Adicionando pra pegar todos os elementos númericos do código.
    A razão de eu fazer isso no escopo geral ao  invés de dentro de um evento especifico é
    pra manter registrado todos os forms que deveriam ser númericos, mesmo que o usuário modifique na mão
    - Felipe D
*/
const numberInputs = document.querySelectorAll('input[type="number"');

//Evento só é adicionado se encontrar o elemento em questão - Felipe D
if(video)
{
	//Adicionar elemento de click que faz o vídeo pausar ou voltar a reproduzir - Felipe D
	video.addEventListener('click', () =>{
		video.paused ? video.play() : video.pause();
	});
}

//Criar evento pro formulário de doação só se ele existir nessa página - Felipe D
if(formDonate)
{
	formDonate.addEventListener('submit', (e) =>{

        //Previne o evento padrão de submit - Felipe D
        e.preventDefault();

        //Valida o campo de nome (o required provavelmente já basta de qualquer forma) - Felipe D 
        let nome = document.querySelector('#nome');
        if(nome.value.trim() === "")
        {
            alert("Campo nome vazio");
            
        }

        //Valida o campo de valor (caso a pessoa consiga passar pelo type number e required) - Felipe D 
        numberInputs.forEach((element) =>{
            if(isNaN(element.value))
            {
                alert("Tipo inválido detectado no campo " + element.name);
                
                return;
            }
        });

        //Resetando o form pra dar a ideia de submit - Felipe D
        formDonate.reset();
	
  });
  
}



