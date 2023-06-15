// 4- Duplicar el array.

function duplicarArrayForEach(arr) {
  const newArr = [];
  arr.forEach((num) => {
    newArr.push(num*2);
  });
  return newArr
}

function duplicarArrayConMap(arr) {
  return arr.map((num) => num * 2);
}

const numeros = [1, 2, 3, 4, 5];
console.log(duplicarArrayForEach(numeros));
console.log(duplicarArrayConMap(numeros));
