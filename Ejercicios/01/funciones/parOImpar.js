//iii.	Crear una función que reciba un número como parámetro y que devuelva 'true' si es par o 'false' si es impar. ¿El cero es par, impar o ninguno?

function parOImpar(num) {
  if (num == 0) {
    return null;
  }
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

//Alternativas
//const parOImpar = (num) => num != 0 && num % 2 == 0;

console.log(parOImpar(0));
console.log(parOImpar(10));
console.log(parOImpar(7));

module.exports = parOImpar;
