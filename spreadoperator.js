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

