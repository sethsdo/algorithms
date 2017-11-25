function reverseArray(arr){
    for (let i = 0, x = arr.length - 1; i <= x; i++ , x--) {
        let temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp
    }
    return arr;
}

let test = [3,4,5,7,6,2,];
console.log(reverseArray(test))