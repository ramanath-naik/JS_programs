// currying in javascript 

//normal way

// function addition(a,b,c)
// {
//     return a+b+c;
// }

// const res=addition(5,4,3);
// console.log(res);


//using currying

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
const res=addition(3)(4)(5);
console.log(res)
//this currying achieving through closures, so above program variables a,b,c private properties of the parent function
