function rFactorial(num){
    if(num<=1) return num;
    return rFactorial(num - 1) * num;
}

function iFactorial(num) {
    var total = num;
    for(var i = num - 1; i > 0; i--) {
        total = total * i;
    }
    return total;
}

console.log(rFactorial(4));
console.log(iFactorial(4));