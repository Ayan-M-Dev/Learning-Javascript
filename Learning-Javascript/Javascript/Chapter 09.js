console.log('hello')

let tittle = document.getElementById('tittle')

console.log ('before: ', tittle.innerText)

let message = 'Goodbye my lover!'

tittle.innerText = message;

console.log('after: ', tittle.innerText)

tittle.innerHTML = `<p> ${message} </p>`

tittle.style.backgroundColor = 'red'

const squares = document.querySelectorAll('.colorSquare')


/* forEach LOOP */

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})

function clearScores() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    
    square.forEach(square => {
        square.innerText = 0
})

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()
