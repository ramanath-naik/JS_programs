// async and await in javascript

const datas=[
    {Name:"aditya",profession:"Software Developer"},
    {Name:"anand",profession:"Software Developer"}    
];

function getdatas()
{
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{        
            output+=`${data.Name}\n`
        })
        console.log(output);
    },1000)
}

function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error=false;  
            if(!error){
                resolve();
            }
            else{
                reject("something wrong");
            }
    
        },2000)
    })
}
// createdata({Name:"akshay",profession:"Software Developer"}).then(getdatas)

//async and await

async function start()
{
    await createdata({Name:"akshay",profession:"Software Developer"})
    getdatas();
}
start();



// const datas=[
//     {Name:"aditya",profession:"Software Developer"},
//     {Name:"anand",profession:"Software Developer"}    
// ];

// function getdatas()
// {
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{        
//             output+=`${data.Name}\n`
//         })
//         console.log(output);
//     },1000)
// }

// function createdata(newdata){
//         setTimeout(()=>{
//             datas.push(newdata);
//         },2000)
// }


// //async and await

// async function start()
// {
//     await createdata({Name:"akshay",profession:"Software Developer"})
//     getdatas();
// }
// start();