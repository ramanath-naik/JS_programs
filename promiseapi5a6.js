//promise api resolve and reject

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    }, 4000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value2")
        // reject(new Error("error"))

    }, 2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
        
    }, 5000)
})

let promise_resolve= Promise.resolve(6)

// let promise_reject= Promise.reject(new Error("Hello"))

// promise_reject.then((value)=>{
//     console.log(value)
// })

promise_resolve.then((value)=>{
    console.log(value)
})