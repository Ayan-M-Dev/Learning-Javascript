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

const filter = (numbers, greaterThan) => {
    let result = []
    for (const number of numbers) {
        if (number > greaterThan) {
            result.push(number)
        }
    }
    return result
}

console.log(filter([1, 2, 3, 4, 5, 6, 7], 3 ))

//FILTER METHOD
const nums = [1, 2, 3, 4, 5, 6,]
console.log(nums.filter(num => num >= 3 || num < 2 ))

const actors = [
    {name: 'johnny', netWorth: 200000},
    {name: 'amber', netWorth: 10},
    {name: 'leonardo', netWorth: 1000000}
]

//console.log(nums.filter(num => 4 || num < 2))
let result = actors.filter(actor => actor.netWorth > 10)


//if (usersIsAuthenticated || userIsPayingMember) {
    //show youtube videos
// } else {
//   
//}

chapter08.innerHTML = '<h1>${result[0].name}</h1>'