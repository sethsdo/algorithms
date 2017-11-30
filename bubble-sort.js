

function bubbleSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var x = 0; x < arr.length; x++) {
            if (arr[x] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[x];
                arr[x] = temp;
            }
        }
    }
    return arr;
}
let test = [9,4,7,2,6,3,1,5,8]
console.log(bubbleSort(test))