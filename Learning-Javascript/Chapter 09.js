console.log('hello')

let tittle = document.getElementById('tittle')

console.log ('before: ', tittle.innerText)

let message = 'Goodbye my lover!'

tittle.innerText = message;

console.log('after: ', tittle.innerText)

tittle.innerHTML = `<p> ${message} </p>`

tittle.style.backgroundColor = 'red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.onclick = () => console.log('red')
yellowDiv.onclick = () => console.log('yellow')
greenDiv.onclick = () => console.log('green')
