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

// //console.log(howManyLetters())

// //Prompting the user to give the input and then counting the letters
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

// //console.log(howManyLetters(phrase))

// //Prompting the user to give the input and then counting the letters but wihtout the for loop
// const howManyLetters = (phrase) => {
//     return  {result: phrase.length}
// }
// const phrase = prompt("Write your phrase")

// //console.log(howManyLetters(phrase))

// //SUM ALL THE NUMBERS IN THE ARRAY
// const sumArray = (numbers) => {
//     let result = 0;
//     for(const number of numbers) {
//         console.log(number)
//         result = result + number
//     }
//     return { result }
// }

// const num = [1, 2, 3, 4, 5]
// //console.log(sumArray(num))

// const max = (numbers) 

// //REUTRN THE HIGHEST VALUE IN THE GIVEN ARRAY
// const max = (numbers) => {
//     let result = numbers[0]
//     //for loop
//     for (const number of numbers){
//         //If loop
//         if (number > result) {
//             result = number
//         }
//     }
//     return { result }
// }

// arr = [10, 30, 40, 90, 59, 49]
// //console.log(max(arr))


const letterFrequency = (phrase) => {
    //letterFrequency('haha') {'h':2, 'a':2}
    console.log(phrase)
    //make a frequency object {}
    let frequency = {}
    for (const letter of phrase) {
        //check if letter exists in frequency
        if (letter in frequency) {
            frequency[letter] += 1        /// frequency[letter]++
        }
            //if incermeent the value by +1
        //otherwise, set the value to 1 
        else {
            frequency[letter] = 1
        }
    }
    return frequency 
} 

//console.log(letterFrequency('you are a loser'))

//WORDFREQUENCY('lol what lol) => ['lol','what','lol']
// const wordFrequency = (phrase) => {
//     let frequency = {}
//     words = phrase.split(' ')
//     for (const word of words ) {
//         console.log(word)
//         if (word in frequency){
//             frequency[word] +=1
//         } else {
//             frequency[word] =1
//         }
//     }
//     console.log(words)

//     return frequency
// }

//console.log(wordFrequency('lol what lol'))
//Incremental Operators
// ++, --, +=

const wordFrequency = (phrase) => {
    const words = phrase.split(' ')
    return letterFrequency(words)
}
console.log(wordFrequency('lol what lol'))