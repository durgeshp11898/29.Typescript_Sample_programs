// Class = Data + Functions 
// Class = Charactristics + Behaviour

class Student{
    // Charactristics

    Name : string;
    Marks : number;
    Age : number;
    City: string;

    // Initilazed
   // Behaviours
    constructor (name:string, marks: number, age: number, city: string){
        this.Name=name;
        this.Marks=marks;
        this.Age=age;
        this.City=city;
    }


    display() : void{
        console.log("Name of Student : "+this.Name);
        console.log("Marks of Student : "+this.Marks);
        console.log("Age of Student : "+this.Age);
        console.log("City of Student : "+this.City);

    }

}

var Obj135= new Student("Durgesh",80,24,"Nashik");
var Obj168 = new Student("Ash",90,22,"Satana");

Obj135.display();
Obj168.display();