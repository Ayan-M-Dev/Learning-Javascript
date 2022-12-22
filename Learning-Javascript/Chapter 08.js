//HIGHER ORDER FUNCTIONS
//map
//filter
//reduce

//MAP - LOOPS AND RETURNS AN ARRAY
// [1, 2, 3, 4].map(number => {
//     console.log(number)
// })

// //OR

// [1, 2, 3, 4].map(number => console.log(number))



// let result = [1, 2, 3, 4].map(number => number * 2)
// console.log(result)

// const doubleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1, 2, 3, 4]))


//FILTER - LLOPS AND RETURNS AN ARRAY WITH MATCHING CONDITION
// const filter = (numbers, greaterThan) => {
//     return filter.map(numbers => number >= 3)
// }

// console.log(filter([2, 6, 8, 5, 3, 2, 1,]))


//REDUCE

//Sum all of the net worths
//SUM: Think reduce
//Reduce take in a function as an argument

const nums = [1, 2, 3]
const result = nums.reduce(function(prev, curr) {
    return prev + curr
})

console.log(result)


// OR (ES6 VER)
// const nums = [1, 2, 3]
// const result = nums.reduce(function(prev, curr) => prev + curr)


// console.log(result)
We Can go to the club so TouchList