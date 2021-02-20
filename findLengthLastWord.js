/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s == " ")
        return 0
     let array = s.split(" ")
     array = array.filter(word => word !== "")
     let lastValue = array.slice(-1)[0]
    
     if(lastValue === undefined){
        lastValue = 0
        return lastValue
    }
    return lastValue.length
   
 };