// promise api allsettled

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    }, 1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        reject(new Error("error"))
    }, 2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    }, 3000)
})

// let promise_all = Promise.all([p1,p2,p3])
let promise_allsettled = Promise.allSettled([p1,p2,p3])
promise_allsettled.then((value)=>{
    console.log(value)
})
