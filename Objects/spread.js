let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7];
let num3 = [8, 9, 10];

//Spread operator - It allows us to expand an iterable (like an array) into individual elements

let combinedNums = [...num1, ...num2, ...num3]
console.log(combinedNums)

let user  = {name: 'Tony', age: 30, city: 'New York'}

let bio = {
    ...user,
    name: 'John',
    profession: 'Developer',
    hobbies: ['football', 'music'],
    name: 'Adam'
}

console.log(bio)


let numbers = [1, 2, 3, 4, 5, 1000, 1]

console.log(Math.max(...numbers)) // Find the maximum number in an array    