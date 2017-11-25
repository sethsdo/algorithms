function findMax(arr){
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max) max = arr[i];
    }
    console.log(max);
}
let test = [1,3,7,8,44,88,2,4,,6];
findMax(test)