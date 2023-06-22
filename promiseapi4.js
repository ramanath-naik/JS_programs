// promise api promise.any

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    }, 4000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("value2")
        reject(new Error("error"))

    }, 2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
        
    }, 5000)
})

let promise_any= Promise.any([p1,p2,p3])
promise_any.then((value)=>{
    console.log(value)
})