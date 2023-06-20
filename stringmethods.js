// String methods

//let nam="ramanath\n"
//console.log(nam.length)

//console.log(nam.toUpperCase()) //toLowerCase()

// let Name="ramanath"
// console.log(Name.slice(2,5)) //slice method
// console.log(Name.slice(2))
// console.log(Name.slice(0,3))

// //replace method
// console.log(Name.replace("nath","raj"))
 
// //concat method
// let Name2="adarsh"
// console.log(Name.concat(" is a friend of ",Name2," ok ")) // we can also use + operator

// //trim method
// let Name3="  rajesh   "
// console.log(Name3.trim()) //remove whitespace
//trimStart() will remove whitespace at the begining of string
//trimEnd() at the end


// let str="ramu" //accessing character from index
// console.log(str)
// console.log(str[0])
// console.log(str[1])
// //str[2]="n" //we cannot change the character of the string

// //using for loop
// for (let i=0;i<str.length;i++)
// {

// console.log(str[i])
// //console.log(i)
// }

//concat using + operator

// st1="hi "+"good morning "
// st2="ramu "
// st3=st1+st2
// console.log(st3)

// //substring
// let str5 = "Apple, Banana, Kiwi";
// let part = str5.substring(7, 12)
// console.log(part)

// string padding
// s1="hello"
// console.log(s1.padEnd(22,'.'))
// s2="hi"
// console.log(s2.padStart(4,'.'))

// //include method
// s3="tiger is most dangerous animal in the wild"
// s4="tiger"
// console.log(s3.includes(s4))//checks for the string that is included or not

//endwith
let str1 = 'Cats are the best!';

console.log(str1.endsWith('best'));

console.log(str1.endsWith('best!',18));

//startwith
let str2 = 'Cats are the best!';
console.log(str2.startsWith('best'));
console.log(str2.startsWith('Cats'));

//Extract amount out of the string
let str3="The amount is Rs 1000";
//let amount=str3.slice("The amount is Rs ".length)
let amount=str3.slice(17)
console.log(amount)
































