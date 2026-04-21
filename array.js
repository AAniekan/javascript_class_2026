

let cars = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"]

// for(let i = 0; i < cars.length; i++)
// {
//     console.log(cars[i])
// }

// map method


// let vehicles = cars.map(car => car + "1") // Returns values or array
// console.log(vehicles)

cars[cars.length] = "Lexus"
cars[cars.length] = "Tesla"

cars.push("Peugot")

cars.unshift("Lambo")

cars.splice(4, 0, "Range Rover")

cars.pop() //Removes from bottom

cars.shift() //Removes from top

let selected_cars = cars.slice(2, 5)

cars.forEach(car => console.log(car));
console.log("================================")
console.log(selected_cars)





let name = "Hi!!!";

console.log(name.split(""))