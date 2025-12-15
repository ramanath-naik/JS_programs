const prompt=require("prompt-sync")();
let age=prompt("What is your age?")

let a = age>18? "You can drive" : "You cannot drive"
console.log(a)
