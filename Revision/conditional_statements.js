

let is_raining = true
let subject = 'english'

if(is_raining && (subject == 'math'))
{
    console.log("come to class")
}else if(is_raining && subject == 'intro tech')
{
    console.log("Bring your drawing board")

}else if(is_raining && subject != 'math')
{
    console.log('Class cancelled')

}else{
    console.log("Sleep more!")
}