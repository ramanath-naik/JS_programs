// Memoization in javascript

const memoizedAdd = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {   //checking value present in cache or not
            console.log('Fetching from cache');
            return cache[value];
        } else {
            console.log('Calculating result');
            let result = value + 10;
            cache[value] = result; //storing value in cache
            return result;
        }
    }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); 
console.log(newAdd(9));