// Javascript class

class student{
    name="ramu"
    age=23
    about()
    {
        console.log(this.name+" is good at sports")
    }
    marks(sc){
        this.score=sc
        console.log("and also his marks is :",this.score)
    }
}
let ob=new student()

ob.about()
ob.marks(93)

