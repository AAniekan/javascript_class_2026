
//String Data Type

let houseColor = 'White';

// console.log(houseColor);
// console.log(houseColor[0])
// console.log(houseColor[1])
// console.log(houseColor[2])
// console.log(houseColor[3])
// console.log(houseColor[4])
// console.log(houseColor.toUpperCase()) //String methods
// console.log(houseColor.toLowerCase())
// console.log(houseColor.split(''))

let message = "The house color is ".concat(houseColor);

// console.log(message)
// console.log(typeof(message))


//Number Data Type

let num = 100 // Integer
let ammount = 1_000_000
let decimalNumber = 3.142 //Float or Decimal

// console.log(num);
// console.log(Math.pow(num, 2)) // Exponentiation
// console.log(num ** 2) // Exponentiation

// console.log(typeof(num))


// Boolean Data Type

let is_male = true;
let is_raining = false;

console.log(is_male);

// Null Data Type

let containerValue  = null

// Undefined Data Type

let noValueForNow = undefined
console.log(noValueForNow);

// Object Data Type

let person = {
    username: "Tony",
    age: 11,
    gender: 'male'
}

let chair = {
    arms: 2,
    legs: 4,
    color: ['white', 'black'],
    texture: 'hard'
}

// Big Int Data Type

let bigNumber = 1234567890123456789012345678901234567890n; // The 'n' at the end indicates a BigInt

// Symbol Data Type
let uniqueSymbol = Symbol('unique');


