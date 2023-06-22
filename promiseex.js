//promise catch and then

let p1 = new Promise((resolve,reject)=>{
    console.log("Promise pending")
    setTimeout(()=>{
        console.log("This is promise and is fulfilled")
        reject(new Error("I am an error"))
        
    }, 2000)
    
})

console.log(p1)