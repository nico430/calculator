const prevValueDisplay = document.getElementById("prev-value");
const actualValueDisplay = document.getElementById("actual-value");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");

const display = new Display(prevValueDisplay,actualValueDisplay)

numberButtons.forEach(buton => {
  buton.addEventListener('click',()=>{
    display.addNumber(buton.innerHTML)
  });
});