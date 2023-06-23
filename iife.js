//Immediately Invoked Function Expression in javascript

//declaration

(()=>{
    let firstvariable;
    let secondvariable;
})();

//first variable and second variable will be discarded after the execution of the function.

// normal function
let f1=()=>{
    age=30;
    console.log("his age is :",age)

}
f1();
console.log(age);


//IIFE example

((value)=>{
    let a=22;
    console.log(value);
    console.log(a)
})("hello");
// console.log(value);
// console.log(a);