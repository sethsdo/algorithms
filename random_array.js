function randomArray(num) {
    let arr = [];
    for(let i = 0; i <= num; i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return arr;
}

console.log(randomArray(10))