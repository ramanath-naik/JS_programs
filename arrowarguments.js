//Arguments binding

//Regular functions have arguments binding
let x = function(){
    console.log(arguments); //we can access arguments using argument keyword
}
x(16,17,18)  //arguments

//Arrow function do not have argument binding
// let y = () => {
//     console.log(arguments);
// }
// y(6,7,8)

// To solve this issue we can use spread syntax
let y = (...n) => {
    console.log(n);
}

x(4,6,7);