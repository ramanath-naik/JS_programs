//Spread operator

function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  
  console.log(sum.apply(null, numbers));
//converting array to object using spread operator
let arr1=[1,2,3]
let obj={...arr1}
console.log(obj)

//array literals (spread operator)
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics)

//spread in object literals
const ob1={nm:"anand",ag:23}
const ob2={nm:"aditya",a:24}

const cloneob={...ob1}
const mergeob={...ob1, ...ob2}
console.log(cloneob)
console.log(mergeob)
