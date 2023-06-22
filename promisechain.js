//Promise chaining

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after two second")
        resolve(56)

    }, 2000)
})
p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve("promise 2")}, 2000)
    })
    return p2
}).then((value)=>{
    console.log("we are done")
    

}).then((value)=>{
    console.log("again we are done")
})