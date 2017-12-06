function tribonacci(signature, n) {
    if (n == 0) {
        return [];
    }
    else if (n < 2) {
        return [signature[0]]
    }
    else if (n < 3) {
        return [signature[0], signature[1]]
    }
    for (var i = signature.length; i < n; i++) {
        var len = signature.length
        var temp = signature[len - 1] + signature[len - 2] + signature[len - 3];
        signature.push(temp);
    }
    return signature;
}

console.log(tribonacci([1, 1, 1], 10))
console.log(tribonacci([0, 0, 1], 10))
console.log(tribonacci([0, 1, 1], 10))
console.log(tribonacci([1, 0, 0], 10))
console.log(tribonacci([0, 0, 0], 10))
console.log(tribonacci([1, 2, 3], 10))
console.log(tribonacci([3, 2, 1], 10))
console.log(tribonacci([1, 1, 1], 1))
console.log(tribonacci([300, 200, 100], 0))
console.log(tribonacci([0.5, 0.5, 0.5], 30))