// 3- Transformar a mayúsculas: Escribe una función llamada convertirMayusculas que tome un array de strings y devuelva un nuevo array donde cada string esté en mayúsculas.

const palabras = ["hola", "mundo", "alexander"];

function convertirAMayusculas(arr) {
  const mayusculas = arr.map((palabras) => palabras.toUpperCase());
  return mayusculas;
}

console.log(convertirAMayusculas(palabras));
