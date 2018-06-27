
function calcularCirculo(radio){
    let circulo 
    return Math.PI*radio*radio
}

function mostrarCirculo(radio, circulo) {
    /*  let mensaje = 'El area del circulo de radio'
     mensaje += radio
     mensaje += 'es'
     mensaje += circulo */
     let mensaje = 
     `El area del circulo de radio ${radio} es ${circulo}`
     console.log(mensaje)
 }

function calcularCircunf(radio){
    return 2*Math.PI*radio
}

function mostrarCircunf(radio, circunf){
    let mensaje = 
    `La longitud de la circunferencia de radio ${radio} es ${circulo}`
    console.log(mensaje)
}

/* function mostrar(circulo){
    let mensaje = 'El resultado es'
    console.log(mensaje,circulo)
} */



function main() {
   let radio = 3
   mostrarCirculo(radio, calcularCirculo(radio))
   mostrarCircunf(radio, calcularCircunf(radio))
   radio = 7
   mostrarCirculo(radio, calcularCirculo(radio))
   mostrarCircunf(radio, calcularCircunf(radio))
}

main ()
