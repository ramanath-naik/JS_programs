// Get and Set method in class

class person
{
    name="virat"
    age=34

    get getname()  //get method
    {
        return this.name;
    }
    get getage()
    {
        return this.age;
    }
    set sname(x)
    {
        this.name=x;

    }
    set sage(y)
    {
        this.age=y;
    }

}

const obj = new person();

console.log(obj.name)
console.log(obj.age)

//setting value to set method
obj.name="ab de villiers" 
obj.age=36

//accessing get method
console.log(obj.getname) 
console.log(obj.getage)  

