function iterateSearch(arr, num) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == num) return i;
    }
    return false;
}


function recursiveSearch(arr, num) {
    

    function helper(arr, count) {
        if (arr[count] == num) { 
            console.log(count)
            return count 
        }
        if(count == arr.length) {
            console.log(false)
            return false;
        } 
        helper(arr, count += 1);
    }
    helper(arr, 0);
}

var test = [-3,-2,-1,0,3,6,7,9];
console.log(iterateSearch(test, 8))
console.log(recursiveSearch(test, 0))