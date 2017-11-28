function iFibonacci(num) {
    var fib = [0,1]
    for(var i = 1; i <= num; i++) {
        let newFib = fib[i] + fib[i-1];
        fib.push(newFib);
    }
    return fib[num];
}

function rFibonacci(num) {
    if (num <= 1) return num;
    console.log(num)
    return rFibonacci(num - 1) + rFibonacci(num - 2);
}

console.log(iFibonacci(6))
console.log(rFibonacci(6))