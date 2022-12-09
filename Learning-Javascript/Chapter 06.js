const fruits = ['Banana' , 'Apple' , 'Orange' , 'Pear','Banana' , 'Apple' , 'Orange' , 'Pear','Banana' , 'Apple' , 'Orange' , 'Pear',]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

//For loop

// for (let i=0; i < fruits.length; i++){
//     console.log(i, fruits[i])
// }

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5, 6]

//Sum up all numbers in array
// for (let i=0; i< numbers.length; i++) {
//     console.log(numbers[i])
//}

// for (const sum of numbers) {
//      console.log(sum * 2)
// }

// const numbers = [1, 2, 3, 4, 5, 6]
// let result = []

// for (const number of numbers) {
//     result.push(number * 2)
// }

// console.log(result)

const double = (numbers) => {
    let result = []
    for (const number of numbers) {
        result.push(number * 2)
    }

    return result
}

console.log(double([1,2,3,4,5,6]))