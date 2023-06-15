// 2- Filtrar la palabra mas larga. La funcion tiene que devolver un array que tenga la palabra mas larga dado al parametro dado.

const palabras = ["manzana", "banana", "kiwi", "pera", "uva"];

function filtrarPalabrasMasLargas(array, long) {
  const filtradas = array.filter((letras) => letras.length >= long);
  return filtradas;
}

console.log(filtrarPalabrasMasLargas(palabras, 4));
