//Local Scope
//Global Scope

let name = "Tony"

function personData()
{
    let name = "Nathan"
    console.log(name)
}

personData()
console.log(name);


if(true)
{
    var personName = "Peter"
}

console.log(personName)



function outer()
{
    let outerVariable = 'outer variable'

    function inner()
    {
        let innerVariable = 'inner variable'
        console.log(outerVariable)
        console.log(innerVariable)
    }
    inner()
}

outer()