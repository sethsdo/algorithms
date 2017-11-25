function shiftVal(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length-1] = 0;
    return arr;
}
let test = [4,3,2,7,3,8]
console.log(shiftVal(test))