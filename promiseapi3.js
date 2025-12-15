// Promise api promise.race

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
        // reject(new Error("error"))
    }, 4000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value2")

    }, 2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    }, 5000)
})

let promise_race= Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log(value)
})

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'two');
//   });
  
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'three');
//   });
  
// Promise.race([promise1, promise2,promise3]).then((value) => {
//     console.log(value);
    
//   });