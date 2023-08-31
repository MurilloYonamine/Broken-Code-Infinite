export  class Animacao{
    constructor(){
        this.cont=0
        this.contImg=1
    }

    getContadorImg(){
        return this.contImg
    }
    addContadorImg(){
        this.contImg++
    }
    subContadorImg(){
        this.contImg--
    }
    getContador(){
        return this.cont
    }
    
    addContador(){
        this.cont++
    }
    subContador(){
        this.cont--
    }



}