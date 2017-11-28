function rSum(num) {
    if (num <= 1) return num;
    else {
        return rSum(num - 1) + num;
    }
}

function iSum(num) {
    var sum = 0;
    for(var i = num; i > 0; i--) {
        sum+=i;
    }
    return sum;
}

console.log(rSum(10))
console.log(iSum(10))