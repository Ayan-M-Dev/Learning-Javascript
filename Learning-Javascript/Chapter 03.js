// //Functions
// function sayMyName(name){
//     console.log(name)
// }

// sayMyName('Ayan')

// function sayMyName2(name){
//     console.log(name)
// }

// sayMyName2('Kevin')

// function greeting(name){
//     greet = 'Hi ' + name + ', Nice to meet you'
//     console.log(greet)
// }

// greeting('Ayan')

// function greeting(name){
//     greet = `Hi ${name}, Nice to meet you!`
//     console.log(greet)
// }

// greeting('Ayan')

function sum(a, b){
    return a + b
}

// num1 = sum(1,2)
// console.log(num1)


function calculateFoodTotal(food, tip) { 
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food , tipAmount)
    return total 
}

console.log(calculateFoodTotal(300, 20))


//ES^
//Arrow Functions =>
//With explicit function
// const sumArrow = (a, b) => {
//     return a + b
// }

//With implicit return function
const sumArrow = (a, b) => a + b 

console.log(sumArrow(10,50))