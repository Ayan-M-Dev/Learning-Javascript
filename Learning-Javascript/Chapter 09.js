console.log('hello')

let tittle = document.getElementById('tittle')

console.log ('before: ', tittle.innerText)

let message = 'Goodbye my lover!'

tittle.innerText = message;

console.log('after: ', tittle.innerText)

tittle.innerHTML = `<p> ${message} </p>`

tittle.style.backgroundColor = 'red'

let red = document.getElementById('red')