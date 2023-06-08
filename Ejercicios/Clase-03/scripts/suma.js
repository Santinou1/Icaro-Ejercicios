//Suma de Numeros
//crear un programa que reciba dos numeros como argumetos y los sume.

function suma(num1, num2) {
  num1 = parseInt(process.argv[2]);
  num2 = parseInt(process.argv[3]);
  return num1 + num2;
}

console.log(suma());

module.exports = suma;
