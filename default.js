//Default parameters

function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5, 2));//parameter passing
  
  console.log(multiply(5)); //only one paarameter is passing to the function

  //passing function value as default value

  // using a function in default value expression

const sum = () => 15;

const calculate = ( x, y = x * sum() ) =>  {
    return x + y;
}

const result = calculate(10);
console.log(result);            