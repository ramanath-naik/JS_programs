// Hoisting in javascript


//following line will run successfully due to javascript hoisting.
console.log(a)  //but it is undefined
greet() //hoisting
function greet()
{
    console.log("Good morning")
}

var a=30;  // declaration hoisted to the top but not initialization
console.log(a)


//let and const with hoisting
// It will show error 
// console.log(b)
// console.log(d)

// function bd()
// {
//     console.log("hello")
// }

// let b=22
// const d=11

