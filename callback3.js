//callback example

//normal function

// program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('Ramu');

//using callback

// Callback Function Example
function greet2(name, myFunction2) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction2(name);
}

// callback function
function sayName2(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet2, 2000, 'John', sayName2);