function esPalindromo(texto) { 
      
    let aDatos = texto.split('')/*array con cada palabra, quito los espacios*/
    let frase = aDatos.join('')/*reconstruyo la frase sin espacios*/
    aDatos = frase.split('')/*array de letras para poder darle la vuelta a la frase*/
    aClon = aDatos.join('|').split('|')// Clon del array con cada letra
    aClon.reverse()// Clon del array al reves
    let alReves = aClon.join('')// convierto el array en frase invertida

    let result = false
    // comparacion
    if (frase.toUpperCase() === alReves.toUpperCase()) {
        result = true
    }

    return result
}

function esPaliShort(texto) {
    let result = false
    // comparacion
    if (texto.split(' ').join('').toUpperCase() 
            === texto.split(' ').join('').split('').reverse().join('').toUpperCase()) {
        result = true
    }

    return result
}

function prueba() {
    let texto = 'Hola, no soy palindromo'
    console.log(esPalindromo(texto)) // False
    texto = 'Mas arroz a la zorra Sam'
    console.log(esPaliShort(texto)) // True
}

// esPali('Hola Amigo')
prueba()