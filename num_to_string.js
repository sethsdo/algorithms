function numToString(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0) arr[i] = 'Dojo';
    }
    return arr;
}
let test = [3,-4,-6,5,3,-2,5];
console.log(numToString(test));