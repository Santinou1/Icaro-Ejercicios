// 1- Suma de números pares: Escribe una función llamada sumarPares que tome un array de números como argumento y devuelva la suma de todos los números pares en ese array.

const numeros = [1, 2, 3, 4, 5, 6];

function sumarPares(arr) {
  const numFiltrados = arr.filter((num) => num % 2 === 0);
  const sumaDePares = numFiltrados.reduce((a, b) => a + b, 0);
  return sumaDePares;
}

console.log(sumarPares(numeros));
