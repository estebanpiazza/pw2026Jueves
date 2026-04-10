/* DOM avanzado: selección (query, queryAll), eventos (listeners, delegación), validación de formularios, render dinámico, localstorage / json */

let colorEspecial = document.getElementById("colorEspecial")

console.log(colorEspecial)

function saludar(){
    alert("un saludo")
}
let liFondo = document.getElementsByClassName("liFondo")

console.log(liFondo)

let botonImportante = document.querySelector("#botonImportante")

botonImportante.addEventListener("click", function(){
    alert("hola tarola")
})

// document.querySelector("#botonImportante").addEventListener("click", function(){ alert("hola tarola")})

let lis = document.querySelectorAll(".liFondo")

console.log(lis)

/* lis.addEventListener("click", function saludar2(){
    console.log("funicona")
}) */


//let nombre = prompt("ingrese su nombre")


let textoSaludo = document.querySelector("#texto")
textoSaludo.innerText = `Hola ${nombre}, ${1+1}`
//back tick


let divARellenar = document.querySelector("#aRellenar")

divARellenar.style.backgroundColor="red"

divARellenar.innerHTML="<h2> soy una marquee </h2>"

//let SWEATER = [{id:1,nombre="sweater", linkImagen: "usbdoausbdaosbdsaub"},{id=2,}]


localStorage.setItem("edad",33)

let nombreInput = document.querySelector("#nombre")

console.log(nombreInput)

/* let textoIngresado = document.querySelector("#textoIngresado")

textoIngresado.addEventListener("change", function () {
    console.log(textoIngresado.value)
})

 */

nombreInput.addEventListener("change", function(){
    localStorage.setItem("nombreInput", nombreInput.value)
})


// localStorage.getItem(nombreInput)
// document.objeto.innerText = localStorage.getItem(nombreInput)

let productos = [
    {id:1,nombre:"a"},{id:2,nombre:"b"},{id:3,nombre:"c"}
]

console.log(productos)
console.log(productos[0].nombre)
console.table(productos)


let productosString = JSON.stringify(productos)
console.log(productosString)

let prodcutosJson = JSON.parse(productosString)
console.log(prodcutosJson)

