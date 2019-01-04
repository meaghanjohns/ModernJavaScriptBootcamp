// Challenge: Create a temperature converter that converts Fahrenheit to Celsius and to Kelvin.

let fahrenheit = 32;
let celsius = (fahrenheit - 32) * (5 / 9);
let kelvin = ((fahrenheit - 32) * (5 / 9)) + 273.15;

console.log("Fahrenheit: " + fahrenheit);
console.log("Fahrenheit to Celsius: " + celsius);
console.log("Fahrenheit to Kelvin: " + kelvin);