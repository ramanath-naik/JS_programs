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