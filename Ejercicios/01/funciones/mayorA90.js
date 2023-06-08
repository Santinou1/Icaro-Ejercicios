//	Crear una función que reciba un número como parámetro y que devuelva 'true' si es mayor o igual que 90 y 'false' si es menor.

function mayorQue90(num) {
  if (num >= 90) {
    return true;
  }
  return false;
}

//ALTERNATIVA
// const mayorQue90= x => x >= 90s

console.log(mayorQue90(91));
console.log(mayorQue90(90));
console.log(mayorQue90(88));
console.log(mayorQue90(22));

module.exports = mayorQue90;
