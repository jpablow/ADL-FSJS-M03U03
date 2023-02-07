let color;
let elemento;
const d1 = document.getElementById("div1");
const d2 = document.getElementById("div2");
const d3 = document.getElementById("div3");
const d4 = document.getElementById("div4");
const mc = document.querySelector(".muestra_color");

document.addEventListener("keydown", function (event) {
    if (event.key == "a" || event.key == "A") {
        color = "aquamarine";
    } else if (event.key == "s" || event.key == "S") {
        color = "salmon";
    } else if (event.key == "d" || event.key == "D") {
        color = "dodgerblue";
    }
    mc.style.backgroundColor = color;
})

pintar = (elemento, color) => { elemento.style.backgroundColor = color };

d1.addEventListener("click", function () {
    pintar(d1, color);
})
d2.addEventListener("click", function () {
    pintar(d2, color);
})
d3.addEventListener("click", function () {
    pintar(d3, color);
})
d4.addEventListener("click", function () {
    pintar(d4, color);
})