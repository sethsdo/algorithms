function minMaxAvg(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    let avg = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }
    
    avg = sum/arr.length;

    return [min, max, avg]
}
let test = [1,5,3,7,0,4,66,3,5,2];

console.log(minMaxAvg(test))