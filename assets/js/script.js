// function pintar() {
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// Ejercicio 3.1
// let elemento;
// pintar = (elemento) => { elemento.style.backgroundColor = "yellow" };

// elemento = document.querySelector("#ele1");
// elemento.addEventListener("click", function () {
//     pintar(elemento);
// })

// Ejercicio 3.2
let elemento;
pintar = (elemento, color = "green") => { elemento.style.backgroundColor = color };

elemento = document.querySelector("#ele1");
elemento.addEventListener("click", function () {
    pintar(elemento, "yellow");
})