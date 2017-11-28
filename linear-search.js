
function linearSearch(item, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === item) {
            count++;
        } 
    }
    if (count != 0) return count;
    else return false;
}

var arr = [24, 8, 23, 3];
console.log(linearSearch(8, arr));   // => 1
console.log(linearSearch(-99, arr)); // => false