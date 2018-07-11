let cadena = 'Pepe'
console.log(cadena.length)
console.log(cadena.concat('Perez'));//no se usa. 
//Se usa console.log(cadena + 'Perez');

aCadena = cadena.split('')
console.log(aCadena)
aFrase = frase.split(' ')
console.log(aFrase);
console.log(aFrase.join(''))

console.log(aFrase.split(' ').join('').toUpperCase())
console.log ('Perez'.toLowerCase());

'ciudades'.slice(2,5)
'ciudades'.substr(2,3)

function capitalizar(cadena) {
    let aTexto = cadena.split(' ')
   
    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabras.split('')
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('') 
        aTexto[i] = palabra   
        /* aTexto[î] = aTexto[i]  */
    }
    let stringCap = aTexto.join(' ')
    return stringCap
}

function capitalizar2(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let aLetras = aTexto[i].split('')
        aLetras[0] = aLetras[0].toUpperCase()
        aTexto[i] = aLetras.join('') 
    }
   return aTexto.join(' ')
}

console.log(capitalizar('Un anillo para todos'));