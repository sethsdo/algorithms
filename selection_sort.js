function SelectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var less = i;
        var bool = false;
        for (var x = i; x < arr.length; x++) {
            if (arr[x] < arr[less]) {
                less = x;
                bool = true;
            }
        }
        console.log(arr[less])
        if (bool) {
            let temp = arr[i];
            arr[i] = arr[less];
            arr[less] = temp;
        }
        console.log(arr)
    }
}

let test = [5,8,2,4,7,3,6,1]
console.log(SelectionSort(test));