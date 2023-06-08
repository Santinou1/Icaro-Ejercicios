const fs = require("fs");

//Copiar de Archivos
// Crear un programa que copie un archivo desde una ubicacion a otra.

const origen= process.argv[2]
const destino= process.argv[3]

fs.copyFile(origen,destino, (err)=>{
    if(err){
        console.error("Error al copiar al archivo", err)
    }else{
        console.log("archivo copiado exitosamente")
    }
}) 

module.exports= fs.copyFile