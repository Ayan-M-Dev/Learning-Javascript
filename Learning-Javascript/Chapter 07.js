// const howManyLetters = ( ) => {
//     const phrase = 'Hey, can you go the grocery shop with me?'

//     let result = 0;
//     //for of
//     for (const index in phrase) {
//         console.log(Number(index) + 1)
//         result = Number(index) + 1
//     }

//     return {result}
// }

// console.log(howManyLetters())

//Prompting the user to give the input and then counting the letters
// const howManyLetters = (phrase) => {

//     let result = 0;
//     //for of
//     for (const index in phrase) {
//         console.log(Number(index) + 1)
//         result = Number(index) + 1
//     }

//     return {result}
// }
// const phrase = prompt("Write your phrase")

// console.log(howManyLetters(phrase))

//Prompting the user to give the input and then counting the letters but wihtout the for loop
const howManyLetters = (phrase) => {
    return  {result: phrase.length}
}
const phrase = prompt("Write your phrase")

console.log(howManyLetters(phrase))
