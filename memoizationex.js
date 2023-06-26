// Example on memoization

let sum = 0;
const calc=(n)=>{
    for(let i=0;i<n;i++)
    {
        sum+=i;

    }
    return sum;
}

console.time()
console.log(calc(7))
console.timeEnd()