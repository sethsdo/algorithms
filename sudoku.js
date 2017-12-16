
function box(grid) {
    let values1 = new Map();
    let values2 = new Map();
    let values3 = new Map();
    for(let y = 0; y < grid.length; y++) {
        let squ = 0;
        if(y === 3) {
            values1 = new Map();
            values2 = new Map();
            values3 = new Map();
        } else if (y === 6) {
            values1 = new Map();
            values2 = new Map();
            values3 = new Map();
        }
        for(let x = 0; x < 3; x++) {
            let value = grid[y][x]
            if (values1.has(value) && value !== ".") {
                return false;
            }
            if (value !== ".") {
                values1.set(value, true);
            }
        }
        valuesSoFar = new Map();
        for (let x = 3; x < 6; x++) {
            let value = grid[y][x]
            if (values2.has(value) && value !== ".") {
                return false;
            }
            if (value !== ".") {
                values2.set(value, true);
            }
        }
        valuesSoFar = new Map();
        for (let x = 6; x < 9; x++) {
            let value = grid[y][x]
            if (values3.has(value) && value !== ".") {
                return false;
            }
            if (value !== ".") {
                values3.set(value, true);
            }
        }
        
    }
    return true
}


function vertical(row, index) {
    let valuesSoFar = new Map();
    for (let i in row) {
        let value = row[i][index]
        if (valuesSoFar.has(value) && value !== ".") {
            return false;
        }
        valuesSoFar.set(value, true);
    }
    return true

}
function horizontal(row) {
    let valuesSoFar = new Map();
    for (let i in row) {
        let value = row[i]
        if (valuesSoFar.has(value) && value !== ".") {          
            return false;
        }
        valuesSoFar.set(value, true);
    }
    return true
    
}
function sudoku2(grid) {
    if (box(grid) == false) {
        console.log(false)
        return false;
    }
    for (let i in grid) {
        if (horizontal(grid[i]) == false) { 
            console.log(false);
            return false;
        }
        for(let x in grid[i]) {
            if (vertical(grid, x) == false) {
                console.log(false)
                return false;
            }
        }   
    }
    console.log(true)
    return true;
}

let test = [[".", "4", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", "4", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "1", ".", ".", "7", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "3", ".", ".", ".", "6", "."],
            [".", ".", ".", ".", ".", "6", ".", "9", "."],
            [".", ".", ".", ".", "1", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "2", ".", "."],
            [".", ".", ".", "8", ".", ".", ".", ".", "."]]


sudoku2(test);


        //    [[".", ".", "5", ".", ".", ".", ".", ".", "."],
        //     [".", ".", ".", "8", ".", ".", ".", "3", "."],
        //     [".", "5", ".", ".", "2", ".", ".", ".", "."],
        //     [".", ".", ".", ".", ".", ".", ".", ".", "."],
        //     [".", ".", ".", ".", ".", ".", ".", ".", "9"],
        //     [".", ".", ".", ".", ".", ".", "4", ".", "."],
        //     [".", ".", ".", ".", ".", ".", ".", ".", "7"],
        //     [".", "1", ".", ".", ".", ".", ".", ".", "."],
        //     ["2", "4", ".", ".", ".", ".", "9", ".", "."]]


        //    [[".", ".", ".", ".", ".", ".", "5", ".", "."],
        //     [".", ".", ".", ".", ".", ".", ".", ".", "."],
        //     [".", ".", ".", ".", ".", ".", ".", ".", "."],
        //     ["9", "3", ".", ".", "2", ".", "4", ".", "."],
        //     [".", ".", "7", ".", ".", ".", "3", ".", "."],
        //     [".", ".", ".", ".", ".", ".", ".", ".", "."],
        //     [".", ".", ".", "3", "4", ".", ".", ".", "."],
        //     [".", ".", ".", ".", ".", "3", ".", ".", "."],
        //     [".", ".", ".", ".", ".", "5", "2", ".", "."]]