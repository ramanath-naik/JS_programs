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


//another example on object
userobj={
    Name:"ajay",
    age:22
}
function userinfo(obj){
    return function(info){
        return obj[info];
    }
}
let res1=userinfo(userobj);
console.log(res1('Name'))
console.log(res1('age'))
//console.log(res('Name')()())//for more values

