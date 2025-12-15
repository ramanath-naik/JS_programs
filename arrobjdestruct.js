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
//let [c,d,e,f,...rest]=arr1  //rest operator
console.log(c,d,e,f)

let arr2=[22,33,43,46,26,11]
let [x, ,y,...rest1]=arr2  //rest operator
console.log(x,y,rest1)


//object
const obj={p:1,q:3}
let {p,q}=obj
console.log(p,q)

//We always have to name the variable the same as the name of the property. 
//But in case we want to rename the variable we can use the colon : instead.
const contacts={
    Name:"ramu",
    lastname:"naik",
    age:24
}
let {Name:Firstname,lastname,age}=contacts
console.log(Firstname,lastname,age)

