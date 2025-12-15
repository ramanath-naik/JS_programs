// Polymorphism in javascript

class shape
{
    draw()
    {
        return "It is a generic shape";
    }
}

class square extends shape
{
    draw()
    {
        return "This is square";
    }
}

class circle extends shape
{
    draw()
    {
        return "this is circle";
    }
}

let s = new shape();
console.log(s.draw())

s=new square();
console.log(s.draw())

s=new circle();
console.log(s.draw())

