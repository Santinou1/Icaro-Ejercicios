const fs = require("fs");

// Crear la carpeta "datos"
fs.mkdirSync("datos");

// Obtener datos de JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    // Convertir los datos en formato de texto
    const jsonData = JSON.stringify(data, null, 2);

    // Guardar los datos en un archivo de texto dentro de la carpeta "datos"
    fs.writeFile("datos/datos.txt", jsonData, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Datos guardados correctamente en el archivo.");
    });
  })
  .catch((err) => {
    console.error(err);
  });
