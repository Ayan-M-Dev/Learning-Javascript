//Objects
const person = {
    name: 'Ayan',
    shirt: 'White'

}

//Accessing objects: Dot notation vs Bracket notation 
console.log(person.name)
console.log(person.shirt)

//Bracket notation
console.log(person['name'])
console.log(person['shirt'])

//Assign object
person.phone = '1-239940-409'
console.log(person.phone)

//Printing the whole object
console.log(person)

//Person 2
const person2 = {
    name: 'Qazi',
    shirt: 'Black'
}

console.log(person2)
console.log(person2.name)
console.log(person2.shirt)


//ES6 arrown function (2 arguments)
//Object
//Template literals

const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 50000,
    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.assets - person.liabilities} USD`

    return intro
}

console.log(introducer('Ayan','Black'))

const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 50000,
        netWorth: function() {
            return this.assets - this.liabilities
        }
    }
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`

    return intro
}

console.log(introducer('Ayan','Black'))
