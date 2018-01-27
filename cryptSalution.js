function isCryptSolution(crypt, solution) {
    let temp = []
    let numOne = '';
    let numTwo = '';
    let numThree = '';

    for (let i in crypt) {
        for (let x of crypt[i]) {
            if (i == 0) {
                for (let y of solution) {
                    if (y[0] == x) {
                        numOne += y[1];
                    }
                }
            }
            if (i == 1) {
                for (let y of solution) {
                    if (y[0] == x) {
                        numTwo += y[1];
                    }
                }
            }
            if (i == 2) {
                for (let y of solution) {
                    if (y[0] == x) {
                        numThree += y[1];
                    }
                }
            }
        }
    }
    if (numOne.length <= 1) {
        if (parseInt(numOne) + parseInt(numTwo) == parseInt(numThree)) {
            console.log(true)
            return true
        }
    }
    else if (parseInt(numOne) + parseInt(numTwo) == parseInt(numThree)) {
        if (parseInt(numOne[0]) == 0 || parseInt(numTwo[0]) == 0 || parseInt(numThree[0]) == 0) {
            console.log(false);
            return false;
        }
        console.log(true)
        return true
    }
    console.log(false)
    return false;
}
// let crypt = ["SEND",
//     "MORE",
//     "MONEY"]
// let test = [["O", "0"],
// ["M", "1"],
// ["Y", "2"],
// ["E", "5"],
// ["N", "6"],
// ["D", "7"],
// ["R", "8"],
// ["S", "9"]]

let crypt = ["WASD",
    "IJKL",
    "AOPAS"]
let test = [["W", "2"],
            ["A", "0"],
            ["S", "4"],
            ["D", "1"],
            ["I", "5"],
            ["J", "8"],
            ["K", "6"],
            ["L", "3"],
            ["O", "7"],
            ["P", "9"]]

isCryptSolution(crypt, test)