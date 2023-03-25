function percentage(Marks, outOf) {
    var ans = 0;
    ans = (Marks / outOf) * 100;
    return ans;
}
var Per = percentage(220, 300);
console.log("Percentage is :" + Per);
