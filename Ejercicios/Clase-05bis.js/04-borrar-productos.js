//04 Borrar un producto

const fs = require("fs");

const nombreProductoBorrar = "Pantalón";

fs.readFile("productos.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let productos = JSON.parse(data);

  productos = productos.filter(
    (producto) => producto.nombre !== nombreProductoBorrar
  );

  fs.writeFile("productos.json", JSON.stringify(productos), "utf-8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Producto eliminado exitosamente.");
  });
});
