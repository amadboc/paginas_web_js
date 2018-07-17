/* let factura1 = {
    empresa: {
        nombre :'',
        direccion :'',
        telefono :'',
        nif :''
    },
    cliente: {
        nombre :'',
        direccion :'',
        telefono :'',
        nif :''
    },
    elementos : [
        {descricion:'',
        precio:'',
        cantidad:''},
       
        {descricion:'',
        precio:'',
        cantidad:''},
        
        {descricion:'',
        precio:'',
        cantidad:''},
    ],

    importeTotal:'',
    tipoIva:'',
    formaPago:'',
}

factura1.calculaImporteTotal = function() {
    //tiene que actualizar el valor de la propiedad correspondiente
}

factura1.mostrar = function() {
    //muestra por pantalla el importe total
} */


let factura1 = {
    empresa: {
        nombre :'Editorial',
        direccion :'C/ Pez',
        telefono :'587 548 584',
        nif :'Z-12754547'
    },
    cliente: {
        nombre :'Libería Libertad',
        direccion :'C/ Monegros',
        telefono :'458 547 569',
        nif :'K-25479638'
    },
    elementos : [
        {descricion:'La ciudad de los prodigios',
        precio:'30',
        cantidad:'10'},
       
        {descricion:'Sin noticias de Gurb',
        precio:'15',
        cantidad:'5'},
        
        {descricion:'El laberinto de las aceitunas',
        precio:'25',
        cantidad:'20'},
    ],

    importeTotal:0,
    tipoIva:1.04,
    formaPago:'Transferencia'
}

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

factura1.mostrar()