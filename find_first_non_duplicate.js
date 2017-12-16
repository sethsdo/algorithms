function firstNotRepeatingCharacter(s) {
    let valuesSoFar = new Map();
    for (let i = 0; i < s.length; i++) {
        if (valuesSoFar.has(s[i])) {
            let value = valuesSoFar.get(s[i]) + 1;
            valuesSoFar.set(s[i], value);
        }else{
            //console.log(s[i], "not")
            valuesSoFar.set(s[i], 0);
        }
    }
    for (let x of valuesSoFar) {
        if (x[1] == 0) {
            console.log(x[0]);
            return x[0];
        }
    }
    console.log('_')
    return '_';
}


let test = "abacabad";

firstNotRepeatingCharacter(test);

