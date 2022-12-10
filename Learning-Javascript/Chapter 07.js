const howManyLetters = ( ) => {
    const phrase = 'Hey, can you go the grocery shop with me?'

    for (letter in phrase) {
        console.log(letter)
    }
}

howManyLetters()