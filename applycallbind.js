// apply, call, bind in javascript

//bind()
var employee = {
    firstname: 'Ramu',
    lastname: 'Naik ',
    getempName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var employeeName = function() {
    console.log(this.getempName() + 'I know you!');
}

var showemp= employeeName.bind(employee); // creates new object and binds employee. 

showemp(); 

//