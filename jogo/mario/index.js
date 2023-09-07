const kai= document.querySelector(".kai")
const pc= document.querySelector(".pc")
const arvores= document.querySelector(".fundo")
const nuvem= document.querySelector(".clouds")
const janela= document.querySelector(".janela")
const janela2= document.querySelector(".janela2")
const chao= document.querySelector(".footer")
const chao2= document.querySelector(".footer2")





function pular(){
    kai.classList.add("jump")

    setTimeout(()=>{
        kai.classList.remove("jump")
    },700) 
}

// Precisa terminar de configurar
const loop = setInterval(()=>{
 const pipPosition= pc.offsetLeft; //pegando o afastamento da esquerda
//Para pegar qualquer propriedade do css fazemos
//o sinal de mais converte para numeros
const kaiPosition= +window.getComputedStyle(kai).bottom.replace("px","")
console.log(kaiPosition)
console.log(pipPosition)
 if(pipPosition<=250 && pipPosition>0 && kaiPosition<80){

    pc.style.animation ="none";
    pc.style.left=`${pipPosition}px`
    arvores.style.animation ="none";
    nuvem.style.animation ="none";
    janela.style.animation ="none";
    janela2.style.animation ="none";
    chao.style.animation ="none";
    chao2.style.animation ="none";

}

},10)


document.addEventListener("keydown", (event)=>{
    console.log(event)

    if (event.keyCode=="32" | event.keyCode==38 ){
        console.log("entrou no se")
        pular()


    }
    
    
} )



// Fundo
let tamanhoFundo=document.querySelector(".game-board")

tamanhoFundo.addEventListener("load",()=>{

    return tamanhoFundo.clientWidth
})