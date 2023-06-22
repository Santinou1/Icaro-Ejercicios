const fs = require("fs");

const nombreProductoMostrar = "Zapatos";

fs.readFile("productos.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const productos = JSON.parse(data);
  const productoMostrar = productos.find(
    (producto) => producto.nombre === nombreProductoMostrar
  );

  console.table(productoMostrar);
});
