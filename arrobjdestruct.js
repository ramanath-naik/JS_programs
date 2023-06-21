//Array and object destructing
//array

let arr=[25,55]
let [a,b]=arr
//no need to do the below code
// let a=arr[0]
// let b=arr[1]

console.log(a,b)

let arr1=[12,13,45,67,87,44]
let [c,d,e,f]=arr1
//let [c,d,e,f,...rest]=arr1  //It's spread operator
console.log(c,d,e,f)

let arr2=[22,33,43,46,26,11]
let [x, ,y,...rest1]=arr2
console.log(x,y,rest1)

