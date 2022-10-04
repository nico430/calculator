class Display {
  constructor(prevValueDisplay,actualValueDisplay){
    this.prevValueDisplay = prevValueDisplay;
    this.actualValueDisplay = actualValueDisplay;
    this.calculator = new Calculator();
    this.prevValue = "";
    this.actualValue = "";
  }

  addNumber(number){
    this.actualValue = number;
  }
}