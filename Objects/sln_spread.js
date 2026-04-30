
let numbers = []

for(let i = 1; i <= 5; i++)
{
    let randomNum = Math.floor(Math.random() * 100) + 1
    numbers.push(randomNum)
}

console.log(numbers)

console.log(Math.max(...numbers))