// Oppgave 1

// const tempInput = document.getElementById("temp-input");
// const toCelsiusBtn = document.getElementById("to-celsius-btn");
// const toFahrenheitBtn = document.getElementById("to-fahrenheit-btn");
// const result = document.getElementById("result");

// function convertToCelsius(temp) {
//   return (temp - 32) * (5 / 9);
// }

// function convertToFahrenheit(temp) {
//   return temp * (9 / 5) + 32;
// }

// toCelsiusBtn.addEventListener("click", function () {
//   const temp = parseFloat(tempInput.value);
//   const celsius = convertToCelsius(temp);
//   result.textContent = `${temp} grader Fahrenheit tilsvarer ${celsius.toFixed(1)} grader Celsius.`;
// });

// toFahrenheitBtn.addEventListener("click", function () {
//   const temp = parseFloat(tempInput.value);
//   const fahrenheit = convertToFahrenheit(temp);
//   result.textContent = `${temp} grader Celsius tilsvarer ${fahrenheit.toFixed(1)} grader Fahrenheit.`;
// });

// Oppgave 2

// function generateNumbers() {
//     var num1 = Math.floor(Math.random() * 11);
//     var num2 = Math.floor(Math.random() * 11);
//     var message = compareNumbers(num1, num2);
//     document.getElementById("output").innerHTML = message;
//     document.getElementById("comparison").innerHTML = num1 + " og " + num2;
// }

// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         return "Det første tallet (" + num1 + ") er større enn det andre tallet (" + num2 + ").";
//     } else if (num2 > num1) {
//         return "Det andre tallet (" + num2 + ") er større enn det første tallet (" + num1 + ").";
//     } else {
//         return "Begge tallene er like (" + num1 + ").";
//     }
// }