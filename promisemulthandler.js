//Attaching multiple handler to promise

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p1 resolved")
        resolve(1)
    })
})
//handler run independently

p1.then(()=>{
    console.log("outside time function")
    setTimeout(()=>{
        console.log("first handler")
    },2000)

})
p1.then(()=>{
    // console.log("second handler")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("second handler")
        }, 3000)
    })
}).then((value)=>{console.log(value)})
