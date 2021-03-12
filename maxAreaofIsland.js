var maxAreaOfIsland = function(grid) {
    let maxSize = 0
    let rowLen = grid[0].length
    let colLin = grid.length
    let count = 0
    let recursiveHelperFunction = (row, column) => {
        if(column < 0 || row < 0 || column === rowLen || row === colLin) return
        if(grid[row][column] === 1) {
            grid[row][column] = 0
            count ++
            recursiveHelperFunction(row -1, column)
            recursiveHelperFunction(row +1, column)
            recursiveHelperFunction(row , column-1)
            recursiveHelperFunction(row , column+1)
        } else {
            return 
        }
    }
    for(let row = 0; row < colLin; row ++){
        for(let column = 0; column < rowLen; column ++) {
            if(grid[row][column] === 1) {
                count = 0
                recursiveHelperFunction(row, column)
                if(maxSize < count) maxSize = count
            } 
        }
    }
    return maxSize
};