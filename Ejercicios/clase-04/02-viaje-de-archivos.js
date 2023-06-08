const fs = require("fs");

// Crear la carpeta "Viaje"
fs.mkdirSync("Viaje");

// Crear archivos con nombres de destinos
const destinos = ["Playa", "Montaña", "Ciudad"];

destinos.forEach((destino) => {
  fs.writeFileSync(
    `Viaje/${destino}.txt`,
    `¡Prepárate para un increíble viaje a ${destino}!`
  );
});
