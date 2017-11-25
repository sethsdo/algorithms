function average(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

let test = [6,7,2,4,99,4,6,1,33];
console.log(average(test))