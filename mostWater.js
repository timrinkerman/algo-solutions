/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let letterHash = {}
    let balloons = "balloon"
    for(let i = 0; i< text.length; i ++){
      if(balloons.includes(text[i])){
         letterHash[text[i]] ? letterHash[text[i]] ++ : letterHash[text[i]] = 1 
         }
         
    }
    
    let math = Math.floor(Math.min(letterHash.b, letterHash.n, letterHash.a, letterHash.l/2, letterHash.o/2))
    return math ? math : 0
    }