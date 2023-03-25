
function addittion(No1 :number, No2:number) : number{
    let ans:number=0;
    ans=No1+No2;
    return ans;
}

function substraction(No1 :number, No2:number) : number{
    let ans:number=0;
    ans=No2-No1;
    return ans;
}


var inputValue1: number=11;
var inputValue2: number=21;
var addresult : number=0;
var subresult:number=0;

addresult=addittion(inputValue1,inputValue2);
console.log("Addittion is "+addresult)
subresult=substraction(inputValue1,inputValue2);
console.log("Substraction is "+subresult);

