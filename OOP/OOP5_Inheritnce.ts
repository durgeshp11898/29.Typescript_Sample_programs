
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
class CircleX extends Circle{

    constructor(radius : number){
        super(radius);

    }

    public CalculateCircumfrnce(): number{
        let Ans: number=0;
        Ans= 2*this.PI*this.Radius*this.Radius;
        return Ans;
    }
}


var Ret:number=0;
var Obj1=  new CircleX(5);

Ret=Obj1.CalculateArea();
console.log("Area Of Circle is "+Ret);

Ret=Obj1.CalculateCircumfrnce();
console.log("Area Of CalculateCircumfrnce is "+Ret);