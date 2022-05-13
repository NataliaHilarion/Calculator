import Calculator from "./Calculator.js";

export default class Display {
  constructor($displayPreviousValue, $displayCurrentValue) {
    this.$displayCurrentValue = $displayCurrentValue;
    this.$displayPreviousValue = $displayPreviousValue;
    this.calculator = new Calculator();
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = undefined;
    this.signs = {
      add: '+',
      divide: '/',
      subtract: '-',
      multiply: 'x',
    }
  }

  // agrega el numero que se activo con el evento click y lo muestra en el display
  addNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return
    this.currentNumber = this.currentNumber.toString() + number.toString()
    this.printValues();
  }

  // borra el ultimo caracter del numero actual, si el string esta vacio, imprime el numero 0
  deleteNumber() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1)
    this.printValues()
    if (this.currentNumber == '' && this.previousNumber == '') {
      this.initialitation()
    }
  }

  //borra todo el contenido del display, e imprime el numero 0
  deleteAll() {
    this.currentNumber = ''
    this.previousNumber = ''
    this.operator = undefined
    this.printValues()
    this.initialitation()
  }

  // es el metodo que se usa en los otros metodos delete, hace que en el display aparezca el 0
  initialitation() {
    this.$displayCurrentValue.textContent = 0
  }

  percentage() {
    const percent = this.previousNumber / 100
    this.$displayPreviousValue.textContent = percent
    this.currentNumber = ''
    this.$displayCurrentValue.textContent = this.currentNumber

  }

  negativeNumber() {
    if (this.previousNumber !== '') {
      this.previousNumber = this.previousNumber * -1
      this.$displayPreviousValue.textContent = this.previousNumber
      this.$displayCurrentValue.textContent = ''
    }
    this.currentNumber = this.currentNumber * -1
    this.$displayCurrentValue.textContent = this.currentNumber
  }

  // al detectar un valor diferente del equal, llama a la funcion calculate
  doTheOperation(value) {
    if (this.operator !== 'equal') {
      this.calculate();
    }
    this.operator = value
    this.previousNumber = this.currentNumber || this.previousNumber
    this.currentNumber = ''
    this.printValues()
  }

  // metodo reutilizable en otros metodos, se encarga de imprimir valores en el display
  printValues() {
    this.$displayCurrentValue.textContent = this.currentNumber
    this.$displayPreviousValue.textContent = `${this.previousNumber} ${this.signs[this.operator] || ''}   `

  }

  //calculos que se realizan con la clase Calculator que esta en el modulo Calculator.js
  calculate() {
    const previousNumber = parseFloat(this.previousNumber)
    const currentNumber = parseFloat(this.currentNumber)

    if (isNaN(currentNumber) || isNaN(previousNumber)) return
    this.currentNumber = this.calculator[this.operator](previousNumber, currentNumber)
  }



}

