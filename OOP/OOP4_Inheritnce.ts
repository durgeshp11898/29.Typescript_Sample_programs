
class Circle{

    public Radius : number;
    public PI : number;

    public constructor(radius : number){
        this.Radius=radius;
        this.PI=3.14;
    }

    public CalculateArea(): number{
        let Ans: number=0;
        Ans=this.PI*this.Radius*this.Radius;
        return Ans;
    }
}

var Ret:number=0;
var Obj1=  new Circle(5);

Ret=Obj1.CalculateArea();

console.log("Area Of Circle is "+Ret);