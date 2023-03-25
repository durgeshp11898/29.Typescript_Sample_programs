function Addition(Arr) {
    var add = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        add = add + week[cnt];
    }
    return add;
}
var week = [121, 212, 332, 23, 23, 323, 433];
var ret = 0;
ret = Addition(week);
console.log("ADDITTION IS = " + ret);
