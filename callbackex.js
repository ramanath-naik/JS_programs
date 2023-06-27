//Javascript callback

//Normal functions

// const datas=[
//     {Name:"aditya",profession:"Software Developer"},
//     {Name:"anand",profession:"Software Developer"}    
// ];

// function getdatas()
// {
//     setTimeout(()=>{
//         let output="";
//         // let output=[];
//         datas.forEach((data,index)=>{      //we can also use datas.map
//             // output.push(data.Name);
//             output+=`${data.Name}\n`
//         })
//         console.log(output);
//     },1000)
// }

// function createdata(newdata){
//     setTimeout(()=>{
//         datas.push(newdata);

//     },2000)
// }
// createdata({Name:"akshay",profession:"Software Developer"})
// getdatas();

//In the above code akshay is not printing because timeout is larger for newdata. before pushing the data the output will be printed.

//this will print newdata 

const datas=[
    {Name:"aditya",profession:"Software Developer"},
    {Name:"anand",profession:"Software Developer"}    
];

function getdatas()
{
    setTimeout(()=>{
        let output="";
        // let output=[];
        datas.forEach((data,index)=>{      //we can also use datas.map
            // output.push(data.Name);
            output+=`${data.Name}\n`
        })
        console.log(output);
    },3000)  // timeout is greater than newdata function.
}

function createdata(newdata){
    setTimeout(()=>{
        datas.push(newdata);

    },2000)
}
createdata({Name:"akshay",profession:"Software Developer"})
getdatas();