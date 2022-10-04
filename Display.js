class Display {
  constructor(prevValueDisplay,actualValueDisplay){
    this.prevValueDisplay = prevValueDisplay;
    this.actualValueDisplay = actualValueDisplay;
    this.calculator = new Calculator();
    this.prevValue = "";
    this.actualValue = "";
  }

  addNumber(number){
    if(number==='.' && this.actualValue.includes('.')) return
    this.actualValue = this.actualValue.toString() + number.toString();
    this.printValues()
  }

  printValues(){
    this.actualValueDisplay.textContent = this.actualValue
    this.prevValueDisplay.textContent = this.prevValue
  }
}