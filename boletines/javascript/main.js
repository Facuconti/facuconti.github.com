//DOM
//querySelector selecciona solo un elemento aunque exitan varios y lo almacenamos en una variable
//querySelectorAll recorre todo el arbol y buscando todos los elementos que cumplan el criterio de busqueda
/*let container = document.querySelectorAll(".container");
console.log(container);

let links = document.querySelector("a");

links.array.forEach(function(link) {
    console.log(link);
});
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
    td.addEventListener('cick',function(){
        console.log(this);        
    })
});
*/

//Obtemer los elementos de la clase close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link) {
    //Agregar un Evento click a cada uno de ellos
    link.addEventListener("click",function(){
        console.log("ACA")
    })
});

//Agregar o quitar iconos por ejemplo las estrellas
/*
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
});
*/






