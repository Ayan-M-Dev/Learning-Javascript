
    let result = 0;
    //for of
    for (const index in phrase) {
        console.log(Number(index) + 1)
        result = Number(index) + 1
    }

    return {result}
}
const phrase = prompt("Write your phrase")

console.log(howManyLetters(phrase))