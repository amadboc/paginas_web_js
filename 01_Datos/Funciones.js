/*Dos tipos de funciones
    -Funciones puras: No tienen "side effects" -> retornan datos
    -Funciones con efectos.
    -Funcion Main.
*/

function sumar(a,b) {
    let resultado = a+b
    return resultado
}

function mostrar(pDato) {
    console.log(pDato)
}

function main() {
    let resultado = sumar(2,5)
    mostrar(resultado)
    mostrar(sumar(45,1725))
}

main()