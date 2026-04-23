
let fruits = ['apple', 'mango', 'orange']

// console.log(fruits.length)
// console.log(fruits[0])
// console.log(fruits[2])

fruits[fruits.length] = 'avocado'
fruits[fruits.length] = 'grape'

fruits.push('watermelon') // Add to the back
fruits.pop() // Remove from the back
fruits.pop() // Remove from the back

fruits.unshift('watermelon')
fruits.shift()
console.table(fruits)

// for(let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i])
// }

// forEach Array method - It does not return a new array
fruits.forEach((fruit, index, array) => console.log(index, fruit, array))


// map Array method - Returns a new/modified array

let fruitsArray = fruits.map(fruit => 'This is a(an) ' + fruit)

console.log(fruitsArray)


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

let evenNumbers = nums.filter((x) => x % 2 == 0)
let oddNumbers = nums.filter((x) => x % 2)
// console.log(evenNumbers)
// console.log(oddNumbers)

let sum = nums.reduce((acc, b) => acc + b)

console.log(sum)

// console.log(2 % 2)


let arraysOfarrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

console.table(arraysOfarrays)
console.log(arraysOfarrays[1][2])

// for(let i = 0; i < arraysOfarrays.length; i++)
// {
//     for(let j = 0; j < arraysOfarrays[i].length; j++)
//     {
//         console.log(arraysOfarrays[i][j])
//     }
// }

arraysOfarrays.forEach((x) => x.forEach((y) => console.log(y)))