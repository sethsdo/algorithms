// function firstDuplicate(a) {
//     let firstIn = 0;
//     for (let i = 0; i < a.length; i++) {
//         for (let x = a.length; x > i; x--) {
//             if (a[i] == a[x]) {
//                 if (x < firstIn) {
//                     firstIn = x;
//                     break;
//                 } else if (firstIn == 0) {
//                     firstIn = x;
//                     break
//                 }
//             }
//         }
//     }
//     if (firstIn > 0) {
//         console.log(a[firstIn]);
//         return a[firstIn];
//     }
//     else {
//         console.log(-1)
//         return -1;
//     }
// }

// function firstDuplicate(a) {
//     let firstIn = 0;
//     var valuesSoFar = [];
//     for (var i = 0; i < a.length; ++i) {
//         var value = a[i];
//         if (valuesSoFar.indexOf(value) !== -1) {
//             console.log(value);
//             return value;
//         }
//         valuesSoFar.push(value);
//     }
//     console.log(-1)
//     return -1;
// }

function firstDuplicate(a) {
    let valuesSoFar = new Map();
    for (let i = 0; i < a.length; ++i) {
        let value = a[i]
        if (valuesSoFar.has(value)) {
            console.log(value);
            return value;
        }
        valuesSoFar.set(value, true);
    }
    console.log(-1)
    return -1;
}



let test = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];

//firstDuplicate(test);

let test2 = [2, 3, 3];

firstDuplicate(test2);
