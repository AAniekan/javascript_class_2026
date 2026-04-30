
let personObj = {
    name: 'Akan',
    age: 27,
    gender: 'male',
    occupation: 'Engineer'
}

let { name, gender, ...rest } = personObj;

console.log(name)
console.log(gender)
console.log(rest)