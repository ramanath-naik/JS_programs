// callback in javascript

function greeting(Name) {
    console.log('Hello ' + Name);
    }
    function processUserInput(callback) {
       
       let  Name = "raj";
        callback(Name);
    }
    processUserInput(greeting);