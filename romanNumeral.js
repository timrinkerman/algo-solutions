/**
 * @param {string} s
 * @return {number}
 */
// I + I + I = 3
// IV != I + V
// If [i + 1] > s[i] do subtraction
// whatever the s[i] == numHash do that math



var romanToInt = function(s) {
 
    let count = 0

    let numHash = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
   
    
    for(let i = 0; i < s.length; i++){
        if(numHash[s[i]] < numHash[s[i + 1]]){
            let num = numHash[s[i + 1]] - numHash[s[i]]
            count += num
            i++
        } else{   
            count += numHash[s[i]]
        }
    }    
return count
};