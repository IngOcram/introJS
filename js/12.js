//"use strict"; //correr JS en modo estricto

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto); //freeze .seal 

producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto));

console.log(producto);