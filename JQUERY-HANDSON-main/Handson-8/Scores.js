$(document).ready(() => {
    var sum = 0;
    var inp = [$("#sub1"), $("#sub2"), $("#sub3"), $("#sub4"), $("#sub5"), $("#sub6")];
    var arr = new Array;
    for (let i = 0; i < 6; i++) {
        sum = 0;
        inp[i].focusout(() => {
            arr.push(inp[i].val());
            sum = sum + parseFloat(arr[i]);
            $("#result").text(sum.toFixed(2));
        })
    }
})