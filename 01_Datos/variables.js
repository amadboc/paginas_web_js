//VARIABLES GLOBALES

//var global = 12
//let global = 12
// global =12

function calcular(pDato) {
    //si se inicializa una variable SIN DECLARAR
    //se crea como variable global
    global = 12
    global = global + pDato
    //global + = pDato
    return global
}

console.log (calcular(10))
console.log(global)

//VARIABLES LOCALES

function aumentar() {
    var local = 2
    let tambienLocal = 3
    const LOCAL = 4

    console.log(local)//2
    console.log(tambienLocal)//3
    console.log(LOCAL)//4
}

aumentar()
console.log(local)//undefined
console.log(tambienLocal)//undefined
console.log(LOCAL)//undefined

////VARIABLES LOCALES CON AMBITO DE BLOQUE

function disminuir() {
    if (true){
        var local = 2
        let tambienLocal = 2
        const LOCAL = 4

    console.log(local)//2
    console.log(tambienLocal)//2
    console.log(LOCAL)//4
    }

    console.log(local)//2
    console.log(tambienLocal)//undefined
    console.log(LOCAL)//undefined

}

disminuir()
    console.log(local)//undefined
    console.log(tambienLocal)//undefined
    console.log(LOCAL)//undefined


