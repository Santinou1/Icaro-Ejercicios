const fs = require("fs");

// Crear la carpeta "Álbum"
fs.mkdirSync("Álbum");

// Crear objetos con información de las fotos
const fotos = [
  {
    nombre: "Playa.jpg",
    fecha: "2023-05-15",
    lugar: "Cancún",
  },
  {
    nombre: "Montaña.jpg",
    fecha: "2023-06-02",
    lugar: "Alpes Suizos",
  },
  {
    nombre: "Ciudad.jpg",
    fecha: "2023-04-20",
    lugar: "Nueva York",
  },
];

// Crear archivos con nombres de fotos y almacenar información adicional
fotos.forEach((foto) => {
  const { nombre, fecha, lugar } = foto;
  fs.writeFileSync(`Álbum/${nombre}`, `Fecha: ${fecha}\nLugar: ${lugar}`);
});
