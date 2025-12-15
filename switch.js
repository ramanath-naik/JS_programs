//switch case

const prompt= require("prompt-sync")()
let num=prompt("Enter number")
num=Number.parseInt(num)

switch(num)
{
    case 14:
        console.log("Entered number is 14")
        break
    case 15:
        console.log("Entered number is 15")
        break
    case 16:
        console.log("Entered number is 16")
        break
    case 17:
        console.log("Entered number is 17")
        break
    case 18:
        console.log("Entered number is 18")
        break
    default:
        console.log("Entered number is not 14,15,16,17,18")


}