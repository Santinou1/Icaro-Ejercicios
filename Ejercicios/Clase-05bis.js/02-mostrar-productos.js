//02 Mostrar todos los productos

const fs = require('fs');

fs.readFile('productos.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const productos = JSON.parse(data);
  console.table(productos);
});