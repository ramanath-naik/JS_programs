//primitive and non primitive datatypes

//primitive
let a=null;//null
let b=345;//number
let c=true;//boolean
let d=BigInt("567");//bigint
let e="hello"//string
let f=Symbol("It is a symbol");//symbol
let g=undefined //undefined

console.log(a,b,c,d,e,f,g);
console.log(typeof e)

//object(Non-primitive datatypes)
const item={
    "deepu":42,
    "akash":33,
    "anand":12
}
console.log(item)

//accessing
console.log(item["akash"])

//adding
item["aditya"]=undefined

console.log(item)

