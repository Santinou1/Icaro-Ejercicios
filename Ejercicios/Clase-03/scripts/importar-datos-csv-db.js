//EJEMPLO PROFESIONAL
//Supongamos que tenemos que crear una herramienta que importe todos los datos de un CSV a nuestra base de datos.
//Lo hariamos de esta manera

//node .\importar-datos-csv-db.js .\db.csv C:\Users\santi\Downloads\Icaro-Ejercicios-main\Ejercicios\Clase-03\db
// NODE= process.argv[0] (Es el primer argumento de la ejecucion)
// .\importar-datos-csv-db.js = process.argv[1] (Es el segundo argumento de la ejecucion  y determina el script que vamos a ejecutar)
// .\db.csv = process.argv[2] (Es el tercer argumento de la ejecucion y son los valores que vamos a utilizar para los scripts)

// node .\importar-datos-csv-db.js .\db.csv C:\Users\santi\Downloads\Icaro-Ejercicios-main\Ejercicios\Clase-03\db 
//[   0,  1,       2,  3   ]


const fs = require("fs");
const csvParser = require("csv-parser");
const database = require("ruta-donde-este-el-modulo-de-la-db");

const archivoCSV = process.argv[2];
const configuracionDB = process.argv[3];

if (!archivoCSV || !configuracionDB) {
  console.log(
    "no existen los archivos proporcionados, asegurate de utilizar bien la logica = node .importar-datos-csv-db.js <ruta-archivo-csv> <configuracion-db> "
  );
} else {
  fs.createReadStream(archivoCSV)
    .pipe(csvParser())
    .on("data", (row) => {
      //Procesar cada fila del CSV y guardar datos en la DB
      database.guardarDatos(row, configuracionDB);
    })
    .on("end", () => {
      console.log("importacion de datos exitosa");
    });
}

