function arraySwap(arr) {
    let temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp
    return arr;
}
let test = [4,6,7,8,1,7,5]
console.log(arraySwap(test))