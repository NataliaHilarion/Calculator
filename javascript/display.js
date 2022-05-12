import Calculator from "./Calculator.js";

export default class Display {
  constructor($displayPreviousValue, $displayCurrentValue) {
    this.$displayCurrentValue = $displayCurrentValue;
    this.$displayPreviousValue = $displayPreviousValue;
    this.calculator = new Calculator();
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = undefined;
    this.signos = {
      add: '+',
      divide: '/',
      subtract: '-',
      multiply: 'x',
    }
  }

  addNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return
    this.currentNumber = this.currentNumber.toString() + number.toString()
    this.printValues();
  }

  deleteNumber() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1)
    this.printValues()
  }

  deleteAll() {
    this.currentNumber = ''
    this.previousNumber = ''
    this.operator = undefined
    this.printValues()
  }

  doTheOperation(value) {
    if (this.operator !== 'equal') {
      this.calculate();
    }
    this.operator = value
    this.previousNumber = this.currentNumber || this.previousNumber
    this.currentNumber = ''
    this.printValues()
  }

  printValues() {
    this.$displayCurrentValue.textContent = this.currentNumber
    this.$displayPreviousValue.textContent = `${this.previousNumber} ${this.signos[this.operator] || ''}   `
  }

  calculate() {
    const previousNumber = parseFloat(this.previousNumber)
    const currentNumber = parseFloat(this.currentNumber)

    if (isNaN(currentNumber) || isNaN(previousNumber)) return
    this.currentNumber = this.calculator[this.operator](previousNumber, currentNumber)
  }

}

