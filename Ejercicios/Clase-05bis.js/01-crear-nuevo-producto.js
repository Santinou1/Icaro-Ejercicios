const fs = require('fs');

const nuevoProducto = {
  nombre: "Gorra",
  precio: 19
};

fs.readFile('productos.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const productos = JSON.parse(data);
  productos.push(nuevoProducto);

  fs.writeFile('productos.json', JSON.stringify(productos), 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Producto agregado exitosamente.');
  });
});