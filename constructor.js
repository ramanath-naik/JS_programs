//constructor example

class hello{
    constructor(){
        this.name="sachin"
        this.age=48
    }
    display(){
        console.log(this.name+" was a legendary player ")
    }

}

const ob = new hello();
ob.display();