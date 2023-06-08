//Primer Ejercicio

const fs = require("fs");

// Crear la carpeta "Fiesta"
fs.mkdirSync("Fiesta");

// Crear archivos con nombres de invitados
const invitados = ["Juan", "María", "Pedro"];

invitados.forEach((invitado) => {
  fs.writeFileSync(
    `Fiesta/${invitado}.txt`,
    `¡Hola ${invitado}! ¡Bienvenido a la fiesta!`
  );
});
