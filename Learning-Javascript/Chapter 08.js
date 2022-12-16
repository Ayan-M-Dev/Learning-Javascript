//HIGHER ORDER FUNCTIONS
//map
//filter
//reduce

// [1, 2, 3, 4].map(number => {
//     console.log(number)
// })

// //OR

// [1, 2, 3, 4].map(number => console.log(number))



// let result = [1, 2, 3, 4].map(number => number * 2)
// console.log(result)

const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}

console.log(doubleMap([1, 2, 3, 4]))


