function typeChecking(codeLines) {
    console.log(codeLines)
    for (var i = 0; i < codeLines.length; i++) {
        codeLines[i].replace(/[']+/g, '')
        console.log(codeLines)
        for (var x = 0; x < codeLines[i].length; x++) {
            console.log(typeof(codeLines[i][x]))
        }
    }
    return codeLines;
}

console.log(typeChecking(["let x = y + '2'",
    "let y = 1.5"]))