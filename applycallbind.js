// apply, call, bind in javascript

//bind()
// var employee = {
//     firstname: 'Ramu',
//     lastname: 'Naik ',
//     getempName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// }

// var employeeName = function() {
//     console.log(this.getempName() + 'I know you!');
// }

// var showemp= employeeName.bind(employee); // creates new object and binds employee. 

// showemp(); 

//bind with arguments
var employee = {
    firstname: 'Ramu',
    lastname: 'Naik ',
    getempName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var employeeName = function(friend) {
    console.log(this.getempName() + 'I know your friend is '+friend);
}

var showemp= employeeName.bind(employee); 

showemp("Pramath"); //we can pass multiple arguments
