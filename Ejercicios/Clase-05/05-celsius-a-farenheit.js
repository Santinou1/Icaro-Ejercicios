// 5 Celsius A Farenheit

//(0 °C × 9/5) + 32 = 32 °F

function convertirCelsiusAFarenheit(arr) {
  const arrayFarenheit = arr.map((tempC) => (tempC * 9) / 5 + 32);
  return arrayFarenheit;
}

const temperaturaCelsius = [0, 10, 20, 30, 40];

console.log(convertirCelsiusAFarenheit(temperaturaCelsius));
