//otra forma de hacer el ejercicio factura.js

let factura1 = {}
    
factura1.empresa = {
    nombre :'Editorial',
    direccion :'C/ Pez',
    telefono :'587 548 584',
    nif :'Z-12754547'
}

factura1.cliente = {
    nombre :'Libería Libertad',
    direccion :'C/ Monegros',
    telefono :'458 547 569',
    nif :'K-25479638'
}
    
factura1.elementos = [0]

    factura1.elementos[0] =
        {descricion:'La ciudad de los prodigios',
        precio:'30',
        cantidad:'10'}
    
    factura1.elementos[1] =   
        {descricion:'Sin noticias de Gurb',
        precio:'15',
        cantidad:'5'}
    
    factura1.elementos[2] =    
        {descricion:'El laberinto de las aceitunas',
        precio:'25',
        cantidad:'20'}
    
    factura1.importeTotal = 0
    
    factura1.tipoIva = 1.04

    factura1.formaPago = 'Transferencia'

factura1.calculaImporteTotal = function() {
    //tiene que actualizar el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIva
        }
    )
}

factura1.mostrar = function() {
    //muestra por pantalla el importe total
    //de la factura en un formato HTML adecuado
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if(isNaN(key)) {
                console.log(`Propiedades de ${key}: `)
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key}: ${oDatos[key]}`)
            }    
        }    
    }
}

//factura1.mostrar()
console.log(factura1)