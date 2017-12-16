function rotateImage(a) {
    const b = [];
    for (const i in a) {
        b[i] = [];
        for (const j in a[i]) {
            b[i][j] = a[a.length - 1 - j][i];
        }
    }
    console.log(b)
    return b;
}

let test = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]

rotateImage(test)