// Class = Data + Functions 
// Class = Charactristics + Behaviour
var Student = /** @class */ (function () {
    function Student(name, marks, age, city) {
        this.Name = name;
        this.Marks = marks;
        this.Age = age;
        this.City = city;
    }
    Student.prototype.display = function () {
        console.log("Name of Student : " + this.Name);
        console.log("Marks of Student : " + this.Marks);
        console.log("Age of Student : " + this.Age);
        console.log("City of Student : " + this.City);
    };
    return Student;
}());
var Obj135 = new Student("Durgesh", 80, 24, "Nashik");
var Obj168 = new Student("Ash", 90, 22, "Satana");
Obj135.display();
Obj168.display();
