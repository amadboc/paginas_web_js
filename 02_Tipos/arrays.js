let aDatos = ['Pepe', 'Rosa', 'Maria']

console.log(typeof aDatos, aDatos)
aDatos[0] = 'Jose'
console.log(aDatos)
aDatos[aDatos.length]='Luis'
aDatos.push('Elena')
console.log(aDatos)

let x = {nombre: 'Pepe', puesto: 'Profesor'}
let y = {nombre: 'Rosa', puesto: 'Profesora'}
let z = {nombre: 'Maria', puesto: 'Directora'}

let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'}
]

console.log(aDatosFull)
aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
aDatosFull[0].apellidos = "Perez"
aDatosFull[1].apellidos = "Lopez"
aDatosFull.push(12)
aDatosFull.push(true)

console.log(aDatosFull)