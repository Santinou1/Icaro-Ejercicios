const fs = require("fs");

// Crear la carpeta "Catálogo"
fs.mkdirSync("Catálogo");

// Crear un array con objetos de productos
const productos = [
  {
    nombre: "Camiseta",
    precio: 19.99,
    descripcion: "Camiseta de algodón suave y cómoda.",
  },
  {
    nombre: "Zapatos",
    precio: 49.99,
    descripcion: "Zapatos elegantes y duraderos para ocasiones especiales.",
  },
  {
    nombre: "Bolso",
    precio: 29.99,
    descripcion: "Bolso espacioso con múltiples compartimentos.",
  },
];

// Crear archivos con nombres de productos y almacenar información adicional
productos.forEach((producto) => {
  const { nombre, precio, descripcion } = producto;
  fs.writeFileSync(
    `Catálogo/${nombre}.txt`,
    `Precio: $${precio}\nDescripción: ${descripcion}`
  );
});
