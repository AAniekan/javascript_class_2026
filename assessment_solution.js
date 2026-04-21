

function countEvens(arr)
{

    let filtered = [];

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            filtered.push(arr[i])
        }
    }

    return filtered.length
}


numbers = "school"

// console.log(countEvens(numbers));


function countEvens_2(arr)
{

     if (typeof arr !== "object" || !Array.isArray(arr)) {
        return "Invalid input";
    }

    return arr.filter(x => x % 2 === 0).length
}

console.log(countEvens_2(numbers))



// console.log(typeof numbers)

// console.log(Array.isArray(numbers))
