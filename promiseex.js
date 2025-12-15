//promise catch and then

let p1 = new Promise((resolve,reject)=>{
    console.log("Promise pending")
    setTimeout(()=>{
        console.log("This is promise and is resolved")
    
        resolve(true)
    }, 2000)
    
})

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise pending")
    setTimeout(()=>{
        console.log("This is promise and is rejected")
        reject(new Error("I am an error"))
        
    }, 2000)
})

//To get the value
p1.then((value)=>{
    console.log(value)
})

//To catch the error
p2.catch((error)=>{
    console.log("some error occured in p2")  //for handling error
})

//catching error without using catch
// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })
// console.log(p1,p2)

