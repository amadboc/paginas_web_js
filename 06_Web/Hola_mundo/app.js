function saludar() {
    console.log(`Hola Mundo`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}

window.addEventListener('load', main)


/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */

