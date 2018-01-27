//Reverse a string

const reverse = (str) => {
    let newStr = str.split('').reverse().join('')
    console.log(newStr)
    return newStr
}


//check if prime
const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2 ) return true;
    else{
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        } return true;
    }
}


//FizzBUzz
const FizzBuzz = (min, max) => {
    for(let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")
        else if (i % 3 === 0) console.log("Fizz")
        else if(i % 5 === 0) console.log("Buzz")
        else console.log(i)
    }
}

reverse("Hello World")
console.log(isPrime(37))
FizzBuzz(1,100)