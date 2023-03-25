function addittion(No1, No2) {
    var ans = 0;
    ans = No1 + No2;
    return ans;
}
function substraction(No1, No2) {
    var ans = 0;
    ans = No2 - No1;
    return ans;
}
var inputValue1 = 11;
var inputValue2 = 21;
var addresult = 0;
var subresult = 0;
addresult = addittion(inputValue1, inputValue2);
console.log("Addittion is " + addresult);
subresult = substraction(inputValue1, inputValue2);
console.log("Substraction is " + subresult);
