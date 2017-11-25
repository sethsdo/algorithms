function squareVal(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr; 
}

let test = [2,45,2,1,6,4,3,6,4,3,5,35];
console.log(squareVal(test));