function insertInto(arr, index, insert) {
    for(let i = 0; i < arr.length; i++){
        if(i == index) {
            console.log("inner if")
            for(let x = arr.length; x >= i; x--) {
                arr[x] = arr[x - 1];
            }
            arr[i] = insert;
        }
    }
    return arr;
}

let test = [2,6,3,5,3,4,2,9];

console.log(insertInto(test, 4, 99))