class App {

    constructor () {
        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        document.addEventListener('scroll', 
            this.scollDetect.bind(this) )
        this.btnTop.addEventListener('click', 
            this.subir.bind(this))
    }   
    
    scollDetect (oE) {
        // console.dir(oE.target.scrollingElement.scrollTop)
        if (oE.target.scrollingElement.scrollTop > 100) {
            this.divTop.classList.remove('hide')
        } else {
            this.divTop.classList.add('hide')
        }
    }

    subir(oE) {
        document.scrollingElement.scrollTop = 0
    }
}

document.addEventListener('DOMContentLoaded', ()=> {new  App()})