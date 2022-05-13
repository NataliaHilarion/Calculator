import Calculator from './Calculator.js';
import Display from './display.js';

const $displayPreviousValue = document.querySelector('.previousValue')
const $displayCurrentValue = document.querySelector('.currentValue')
const $numberButton = document.querySelectorAll('.number')
const $operator = document.querySelectorAll('.operator')
const $back = document.querySelector('.back')
const $delete = document.querySelector('.delete')
const $percentage = document.getElementById('percentage')
const $negative = document.getElementById('negative')

const display = new Display($displayPreviousValue, $displayCurrentValue)

// Iteramos los elementos con la clase number y su texto de HTML se pasa como argumento al metodo addNumber de la clase Display
$numberButton.forEach(button => {
  button.addEventListener('click', () => display.addNumber(button.innerHTML) )
})

// Cada vez que demos click en boton con la clase back se activa el metodo deleteNumber de la clase Display
$back.addEventListener('click', () =>  display.deleteNumber() )

// Cada vez que demos click en boton con la clase delete se activa el metodo deleteAll de la clase Display
$delete.addEventListener('click', () => display.deleteAll())

// Iteramos los elementos con la clase operator y su value se pasa como argumento al metodo doTheOperation de la clase Display
$operator.forEach( button => {
  button.addEventListener('click', () => display.doTheOperation(button.value) )
})

// el evento click del id percentage llama al metodo percentage de la clase display
$percentage.addEventListener('click', () => display.percentage())

// el evento click del id negative llama al metodo negativeNumber de la clase display
$negative.addEventListener('click', () => display.negativeNumber())

