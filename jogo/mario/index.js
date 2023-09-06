const kai= document.querySelector(".kai")
const pc= document.querySelector(".pc")




function pular(){
    kai.classList.add("jump")

    setTimeout(()=>{
        kai.classList.remove("jump")
    },400) 
}

// Precisa terminar de configurar
const loop = setTimeout(()=>{
 const pipPosition= pc.offsetLeft; //pegando o afastamento da esquerda
//Para pegar qualquer propriedade do css fazemos
//o sinal de mais converte para numeros
const kaiPosition= +window.getComputedStyle(kai).bottom.replace("px","")
console.log(kaiPosition)
console.log(pipPosition)
 if(pipPosition<=120 && pipPosition>0 && kaiPosition<80){

    pc.style.animation ="none";
    pc.style.left=`${pipPosition}px`
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