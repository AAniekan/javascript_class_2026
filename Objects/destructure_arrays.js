
let names = ['Samuel', 'Adam', 'Tony', 'Jackson', 'Mary', 'Janet'];

// Array Destructuring

let [firstPerson, , ,lastPerson, ...rest] = names

console.log(firstPerson)
console.log(lastPerson)
console.log(rest)