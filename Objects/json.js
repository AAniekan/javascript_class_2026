
let jsonExample = {
    "name": "Tony",
    "complexion": "Dark",
    "height": "6'7",
}

let vehicleObj = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white"
}

let changeToJson = JSON.stringify(vehicleObj) // Convert a JavaScript object to a JSON string

console.log(changeToJson)

let changeToObj = JSON.parse(changeToJson) // Convert a JSON string to a JavaScript object

console.log(changeToObj)