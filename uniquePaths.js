// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    const traverse = (i,j,memo={}) => {
        if(memo[`${i},${j}`]) return memo[`${i},${j}`]
        
        if(i>m-1 || j>n-1) return 0
        
        if(i===m-1 && j===n-1) return 1        
        
        let down = traverse(i+1,j, memo)
        let right = traverse(i,j+1, memo)
        
        memo[`${i},${j}`] = down + right
        return memo[`${i},${j}`]
        
        }
    return traverse(0,0)
    
};