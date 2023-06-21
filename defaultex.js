//Default paameter example

function fun(x,y) {
    x = (x !== undefined) ? x : 10;
    y = (y !== undefined) ? y : 44;
    console.log( x + y );
   }
   console.log("without undefined type")
   fun( 0, 33 ); 
   console.log("with undefined tupe")
   fun( undefined, 7 ); 

   //example 2

   function bar(val) {
    console.log( "bar called!" );
    return y + val;
   }
   function foo(x = y + 3, z = bar( x )) {
    console.log( x, z );
   }
   var y = 5;
   foo(); 
   foo( 10 );
   y = 6;
   foo( undefined, 10 ); 