

export default function mul(...numbers)
{
    return numbers.reduce((acc, sum) => acc * sum)
}