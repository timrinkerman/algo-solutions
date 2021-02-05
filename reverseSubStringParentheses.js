/**
 * @param {string} s
 * @return {string}
 */

    // Iterrate through the string and push the index of each left bracket into my stack
// when i encounter a right bracket, i will use the last element in my stack with my right bracket index to 
// reverse the string and replace
var reverseParentheses = function(s) {
    let stack = []
    s = s.split('')
   for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            stack.push(i)
        }
        if(s[i] === ")"){
            let leftIndex = stack.pop()
            let reverse = s.slice(leftIndex+1,i).reverse()
            s.splice(leftIndex,i-leftIndex+1,...reverse)
            i -= 2
        }
    }
    return s.join('')
};
