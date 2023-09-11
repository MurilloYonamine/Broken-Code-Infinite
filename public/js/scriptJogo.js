const kai = document.querySelector(".kai");
const pc = document.querySelector(".pc");
const arvores = document.querySelector(".fundo");
const nuvem = document.querySelector(".clouds");
const janela = document.querySelector(".janela");
const janela2 = document.querySelector(".janela2");
const chao = document.querySelector(".footer");
const chao2 = document.querySelector(".footer2");  //. sao usados para pegar a classes
const over = document.querySelector("#gameover"); //# sao usadas para chamar id
const scoreElement = document.querySelector("#score"); // Adicione um elemento HTML para exibir a pontuação
const kaiFinal = document.querySelector(".kaiFinal"); //parte fianl do jogo
let score = 0;

function updateScore() {
    score += 1;
    scoreElement.innerText = `Pontuação: ${score}`;

    // Verifique se a pontuação é um múltiplo de 100

    renderScoreForm(score);
}



function renderScoreForm(score) {
    const form = `
        <input type="hidden" name="score" value="${score}">
    `;

    // Inclua o formulário oculto onde você deseja na sua página HTML usando Handlebars
    // Por exemplo, você pode inseri-lo em um elemento com um ID específico na página
    document.getElementById('scoreFormContainer').innerHTML = form;
}

function pular() {
    kai.classList.add("jump");

    setTimeout(() => {
        kai.classList.remove("jump");
    }, 700);
}

// Precisa terminar de configurar
const loop = setInterval(() => {
   
    const arvoresPosition = arvores.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const janelaPosition = janela.offsetLeft;
    const janela2Position = janela2.offsetLeft;
    const chaoPosition = chao.offsetLeft;
    const chao2Position = chao2.offsetLeft;
    const pipPosition = pc.offsetLeft;
      //pegando o afastamento da esquerda
    //Para pegar qualquer propriedade do css fazemos
    //o sinal de mais converte para numeros
    const kaiPosition = +window.getComputedStyle(kai).bottom.replace("px", "");
    if(score === 300){
        
        pc.style.animation = "computadoreAnimate 2.5s infinite linear"
        console.log("aumentou")
    }
    if(score === 600 ){
        
        pc.style.animation = "computadoreAnimate 2s infinite linear"
        console.log("aumentou")
    }
    if(score === 960){
        
        pc.style.animation = "computadoreAnimate 1.7s infinite linear"
        console.log("aumentou")
    }
    if(score === 1325 ){
        
        pc.style.animation = "computadoreAnimate 1.3s infinite linear"
        console.log("aumentou")
    }if(score === 1900 ){
        
        pc.style.animation = "computadoreAnimate 1s infinite linear"
        console.log("aumentou")
    }
    
    
    //colisao e fim de jogo
    if (pipPosition <= 280 && pipPosition > 10 && kaiPosition < 80) {



        pc.style.animation = "none";
        pc.style.left = `${pipPosition}px`;
        arvores.style.animation = "none";
        arvores.style.left = `${arvoresPosition}px`;
        nuvem.style.animation = "none";
        nuvem.style.left = `${nuvemPosition}px`;
        janela.style.animation = "none";
        janela.style.left = `${janelaPosition}px`;
        janela2.style.animation = "none";
        janela2.style.left = `${janela2Position}px`;
        chao.style.animation = "none";
        chao.style.left = `${chaoPosition}px`;
        chao2.style.animation = "none";
        chao2.style.left = `${chao2Position}px`;
        over.style.display = "flex";
        over.style.flexDirection = "column";
        over.style.justifyContent = "center";
        over.style.justifyItems = "center";

        kai.style.animation = 'none';
        kai.style.bottom = `${kaiPosition}px`;



        


        clearInterval(loop);
    }

    //aqui entrará a parte do boss 
    updateScore();
    if (score === 800) {

    }

}, 50);



document.addEventListener("keydown", (event) => {
    console.log(event);

    if (event.keyCode == "32" | event.keyCode == 38) {
        console.log("entrou no se");
        pular();
    }
});



// Fundo
let tamanhoFundo = document.querySelector(".game-board");

tamanhoFundo.addEventListener("load", () => {

    return tamanhoFundo.clientWidth;
})

