
// Kay Karycha ahe ?  --- Methods --> Addittion & Substrction

// Tyasathi kai lagnar ahe ? (Data) 2 Numbers Lagtil

class Arithmatic{

    //Data or Charactrsticss

    public inputNumber1 :number;
    public inputNumber2: number;

   public constructor(no1 :number,no2: number){

        this.inputNumber1=no1;
        this.inputNumber2=no2;
    }

    public Addittion(): number{
       return this.inputNumber1+this.inputNumber2;
    }

    public Substrction(): number{
        return this.inputNumber1-this.inputNumber2; 
    }

}

var Obj111= new Arithmatic(11,10);
var Obj112= new Arithmatic(23,10);


var Ret : number=0;

Ret=Obj111.Addittion();
console.log("Addittion of Object "+Obj111+" is :"+Ret);
Ret=Obj111.Substrction();
console.log("Substraction of Object "+Obj111+" is :"+Ret);


Ret=Obj112.Addittion();
console.log("Addittion of Object "+Obj111+" is :"+Ret);
Ret=Obj112.Substrction();
console.log("Substraction of Object "+Obj111+" is :"+Ret);