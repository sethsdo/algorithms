function negReplace(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0) arr[i] = 0;
    }
    return arr;
}
let test = [3,-8,5,-4,4,-2,-1];
console.log(negReplace(test))