const prevValueDisplay = document.getElementById("prev-value");
const actualValueDisplay = document.getElementById("actual-value");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");

const calculator = new Calculator();

console.log(calculator.add(2,2));