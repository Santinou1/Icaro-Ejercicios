// Generar contraseña
//Crear un programa que genere una contraseña con la longitud especificada por el usuario. El argumento de Process debe de ser la longitud misma

function generarContraseña(long) {
  const caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ123456789";
  let contraseña = "";

  for (let i = 0; i < long; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indice];
  }

  return contraseña;
}

const long = parseInt(process.argv[2]);
const contraseña = generarContraseña(long);
const contraseña1 = generarContraseña(long);
const contraseña2 = generarContraseña(long);

console.log(`Contraseña generada, y la contraseña es ${contraseña}`);
console.log(`Contraseña generada, y la contraseña es ${contraseña1}`);
console.log(`Contraseña generada, y la contraseña es ${contraseña2}`);

module.exports=generarContraseña