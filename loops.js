//print sum of first n natural numbers

const prompt=require("prompt-sync")();
let n= prompt("Enter the value of n: ")
sum=0;
n=Number.parseInt(n);
for (let i=0;i<n ; i++)
{
    sum+=i
}
console.log(sum)
