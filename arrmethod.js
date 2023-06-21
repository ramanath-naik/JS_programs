// we cannot use arrow functions to create methods inside objects

let person = {
    name: 'Jack',
    age: 25,
    sayName: () => {

        // this refers to the global .....
        
        console.log(this.age);
    }
}

person.sayName();
