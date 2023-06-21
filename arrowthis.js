//how  regular function and arrow function will work with this keyword

//Regular function with this 
// const x={
//     Name:"Ramanath",
//     role:"js developer",
//     exp:3,
//     display: function(){
//         console.log(`Name is ${this.Name}`)
//         setTimeout(function(){
//             console.log(`The role is${this.role}\n and experience is ${this.exp}`)

//         },2000)
//     }
// }
// x.display();

//Arrow function with this
const x={
    Name:"Ramanath",
    role:"js developer",
    exp:3,
    display: function(){
        console.log(`Name is ${this.Name}`)
        setTimeout(() => {
            console.log(`The role is ${this.role}\nand experience is ${this.exp}`)

        },2000)
    }
}
x.display();
      