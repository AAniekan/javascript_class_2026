

let person = [
    'Tony',
    'Dark',
    "6'7",
    'male',
    ['football', 'music'],
];

// console.table(person)

// function sayHello()
// {
//     return "Hello"
// }

let personObj = {
    name: 'Tony',
    complexion: 'Dark',
    height: "6'7",
    gender: 'male',
    hobbies: ['football', 'music'],
    sayHello: function() { return "Hello" }
}

console.log(personObj.name) // Dot notation - It does not allow us to use variables to access properties of an object
console.log(personObj['name']) // Bracket notation - It allows us to use variables to access properties of an object

personObj.name = 'John' 
personObj['name'] = 'Adam'

console.log(personObj)

// let methodCall = personObj.sayHello()
// console.log(methodCall)

// for(let key in personObj)
// {
//     console.log(personObj[key])
// }