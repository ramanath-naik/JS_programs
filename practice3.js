const prompt=require("prompt-sync")();

let marks={
    aditya:90,
    anand:98,
    akshay:92,
    abhi:66
}

for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of "+ Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]])
}

//using for in loop

for (let key in marks)
{
    console.log("the marks of " +key+ " are " +marks[key])
}

//print until you get correct number

let cn=17
let i
while(i!=cn)
{
    i=prompt("Enter a number")
    console.log("Try again")

}
console.log("You have entered a correct number")

//mean of number

const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log("mean : ",mean(17,17,17,18))



