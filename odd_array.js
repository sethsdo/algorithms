function oddArray(num) {
    let arr = [];
    for(let i = 1; i <= num; i+=2) {
        arr.push(i);
    }
    return arr;
}

console.log(oddArray(255));