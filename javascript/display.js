import Calculator from "./Calculator.js";

export default class Display {
  constructor($displayCurrentValue, $displayPreviousValue) {
    this.$displayPreviousValue = $displayPreviousValue;
    this.$displayCurrentValue = $displayCurrentValue;
    this.calculator = new Calculator();
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = undefined;
  }

  addNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return
    this.currentNumber = this.currentNumber + number
    this.printValues();
  }

  deleteNumber() {
    this.currentNumber = this.currentNumber.slice(0, -1)
    this.printValues()
  }

  deleteAll() {
    this.currentNumber = ''
    this.previousNumber = ''
    this.operator = undefined
    this.printValues()
  }

  printValues() {
    this.$displayCurrentValue.textContent = this.currentNumber
    this.$displayPreviousValue.textContent = this.previousNumber
  }



}

