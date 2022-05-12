export default class Calculator{
  add(num1, num2){
    return num1 + num2
  }
  subtract(num1, num2){
      if(num1 == num2){
        return '0'
      }
      return num1 - num2
  }
  multiply(num1, num2){
    return num1 * num2
  }
  divide(num1, num2){
    return num1 / num2
  }
}


