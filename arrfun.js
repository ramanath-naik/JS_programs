//arrow function 
//arrow function without arguments
const arrfunction=()=>console.log("hello world");
arrfunction();  //function call

//with arguments
let arr = x => console.log(x);
arr("Good morning"); 

//arrow function as an expression
let age = 5;

let vote = (age < 18) ?
  () => console.log('cant vote') :
  () => console.log('can vote');

vote(); 

//multiline arrow function

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 
