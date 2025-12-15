//age is lies between 18 and 30

const prompt= require("prompt-sync")();
let age=prompt("Enter your age");
if (age>18 && age<30)
{
    console.log("Age is lies between 18 and 30")
}
else{
    console.log("Age does not lies between 18 and 30")
}
