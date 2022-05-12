import Calculator from './Calculator.js';
import Display from './display.js';

const $displayPreviousValue = document.querySelector('.previousValue')
const $displayCurrentValue = document.querySelector('.currentValue')
const $numberButton = document.querySelectorAll('.number')
const $operator = document.querySelectorAll('.operator')
const $back = document.querySelector('.back')
const $delete = document.querySelector('.delete')

const display = new Display($displayPreviousValue, $displayCurrentValue)

$numberButton.forEach(button => {
  button.addEventListener('click', () => display.addNumber(button.innerHTML) )
})

$back.addEventListener('click', () =>  display.deleteNumber() )

$delete.addEventListener('click', () => display.deleteAll())

$operator.forEach( button => {
  button.addEventListener('click', () => display.doTheOperation(button.value) )
})
