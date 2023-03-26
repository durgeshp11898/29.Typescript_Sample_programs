var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.Radius = radius;
        this.PI = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var Ret = 0;
var Obj1 = new Circle(5);
Ret = Obj1.CalculateArea();
console.log("Area Of Circle is " + Ret);
