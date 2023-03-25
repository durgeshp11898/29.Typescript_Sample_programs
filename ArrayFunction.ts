                                                


function Addition(Arr: number[]) :number {

    var add : number =0;

    var cnt: number=0;
    
    for(cnt=0;cnt< Arr.length;cnt++){
        add=add+week[cnt];
       }
    
       return add;
}

var week : number[] = [121,212,332,23,23,323,433];

var ret : number=0;

ret=Addition(week);
console.log("ADDITTION IS = "+ret);


