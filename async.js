//synchronous and asynchronous in javascript

//synchronous

// let p=()=>{
//     console.log("First")
//     console.log("second")
//     console.log("Third")
// }
// p();

//async 

let p=()=>{
    console.log("First")
    setTimeout(()=>{
        console.log("second")
    },2000)

    console.log("Third")
}
p();