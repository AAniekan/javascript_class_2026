

function increment()
{
    let count = 0;

    function incrementCount()
    {
        count++
        console.log(count)
    }

    return incrementCount
}

let counter = increment();

console.log(counter)
counter()
counter()
counter()
counter()
counter()