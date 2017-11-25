function printSum(num) {
    let sum = 0;
    for(let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}

console.log(printSum(5000))