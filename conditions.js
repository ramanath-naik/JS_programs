const prompt= require("prompt-sync")();
let age=prompt("Enter your age");
age=Number.parseInt(age); //converting string to a number

if (age<0)
{
    console.log("this is an invalid age");
}
else if(age<9)
{
    console.log("you are kid and you cannot think of driving");

}
else if(age=>9 && age<=18)
{
    console.log("you are kid and you can think of driving after 18");
}
else
{
    console.log("You can drive as you are above 18");
}
console.log("done");


