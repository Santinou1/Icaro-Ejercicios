//03 Actualizar un producto 

const fs = require('fs');

const nombreProductoActualizar = "Camisa";
const nuevoPrecio = 40;

fs.readFile('productos.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let productos = JSON.parse(data);

  const productoActualizar = productos.find(producto => producto.nombre === nombreProductoActualizar);
  if (productoActualizar) {
    productoActualizar.precio = nuevoPrecio;

    fs.writeFile('productos.json', JSON.stringify(productos), 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Producto actualizado exitosamente.');
    });
  }
});