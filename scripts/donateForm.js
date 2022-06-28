//Esse script é dedicado pra página de doação - Felipe D

//Pega valor já doado, se não tiver cria com um padrão de 55750
//associa ele ao HTML após isso - Felipe D
const donateValue = document.querySelector('#donateValue');
const localStorageValue = window.localStorage.getItem('value');


const formDonate = document.querySelector("#donate-form");

if(localStorageValue === null)
{
    window.localStorage.setItem('value', 55750);
}

/*  Adicionando pra pegar o primeiro input númerico do código.
    A razão de eu fazer isso no escopo geral ao  invés de dentro de um evento especifico é
    pra manter registrado o único input que deveria ser númerico, mesmo que o usuário modifique na mão esse o outros inputs
    - Felipe D
*/
const numberInputs = document.querySelector('input[type="number"');

UpdateDonations();

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
        
        if(isNaN(numberInputs.value))
        {
            alert("Tipo inválido detectado no campo " + element.name);
            
            return;
        }

        //Valida se o valor é positivo - Felipe D
        if(numberInputs.value <= 0)
        {
            alert("Não é possível doar valores nulos/negativos");
            
            return;
        }
        
        let totalDoacao = window.localStorage.getItem('value');
        window.localStorage.setItem('value', Number(totalDoacao) + Number(numberInputs.value));
        
        UpdateDonations();
        //Resetando o form pra dar a ideia de submit - Felipe D
        formDonate.reset();
        alert("Obrigado por doar para Walter White!");
	
  });
  
}

//Método pra atualizar as doações, atualiza tanto o indicador de quantidade doada quanto a barra de progresso - Felipe D
function UpdateDonations()
{
    let progressBar = document.querySelector('.progress-bar');
    let valorDoado = window.localStorage.getItem('value');
    donateValue.innerHTML = '$ ' + valorDoado;

    //Tira a porcentagem da meta, se tiver ultrapassado limita a barra a ficar completa, sem ultrapassar - Felipe D
    var porcentagem = (valorDoado * 100)/120000;
    if(porcentagem > 100) porcentagem = 100;
    if(porcentagem < 0) porcentagem = 0;    
    
    //Define o tamanho do progresso conforme definido pelo cálculo acima - Felipe D
    progressBar.style.width = porcentagem + "%";

}
