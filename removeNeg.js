function removeNeg(arr) {
    let newarr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) newarr.push(arr[i]) 
    }
    return newarr;
}

let test = [4,-7,2,7,4,-3]
console.log(removeNeg(test))