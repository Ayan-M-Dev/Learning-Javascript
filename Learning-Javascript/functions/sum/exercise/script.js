/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a , b){
  return a + b
}

function sub(a , b){
  return a - b
}

function div(a , b){
  return a / b
}

function mul(a , b){
  return a * b
}

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
console.log(mul(5,5))

const addTwoNumber = (a,b) => a + b
console.log(addTwoNumber(25,25))

const subtractTwoNumber = (a,b) => a - b
console.log(subtractTwoNumber(25,25))

const divideTwoNumber = (a,b) => a / b
console.log(divideTwoNumber(25,25))

const multiplyTwoNumber = (a,b) => a * b
console.log(multiplyTwoNumber(25,25))