function greaterThen(arr, Y){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (Y < arr[i]) count++;
    }
    return count;
}
let test = [1,5,3,6,3,7,8,9,4,77,4,3,688];
console.log(greaterThen(test, 7))