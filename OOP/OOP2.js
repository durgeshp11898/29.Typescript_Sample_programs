// Kay Karycha ahe ?  --- Methods --> Addittion & Substrction
// Tyasathi kai lagnar ahe ? (Data) 2 Numbers Lagtil
var Arithmatic = /** @class */ (function () {
    function Arithmatic(no1, no2) {
        this.inputNumber1 = no1;
        this.inputNumber2 = no2;
    }
    Arithmatic.prototype.Addittion = function () {
        return this.inputNumber1 + this.inputNumber2;
    };
    Arithmatic.prototype.Substrction = function () {
        return this.inputNumber1 - this.inputNumber2;
    };
    return Arithmatic;
}());
var Obj111 = new Arithmatic(11, 10);
var Obj112 = new Arithmatic(23, 10);
var Ret = 0;
Ret = Obj111.Addittion();
console.log("Addittion of Object " + Obj111 + " is :" + Ret);
Ret = Obj111.Substrction();
console.log("Substraction of Object " + Obj111 + " is :" + Ret);
Ret = Obj112.Addittion();
console.log("Addittion of Object " + Obj111 + " is :" + Ret);
Ret = Obj112.Substrction();
console.log("Substraction of Object " + Obj111 + " is :" + Ret);
