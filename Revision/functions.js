

function userTheme(name, mode = 'Light')
{
    console.log(`${name} prefered theme is ${mode} mode`);
}

userTheme("Emediong", "Dark");
userTheme("Samuel", "Light");
userTheme("Ada")


function sum(num1, num2)
{
    let result = num1 + num2;
    return result;
}

let output = sum(10, 12);
// console.log(output)


//Arrow function

let sum2 = (num1, num2) => num1 + num2

let output2 = sum2(2, 3);
console.log(output2)

let functionType = function(){
    console.log("This is a function expression");
}

functionType()