let numbers =[2,4,6,8,10];

//function to return square of numbers

function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list

let square_numbers = numbers.map(square);
console.log(square_numbers);
