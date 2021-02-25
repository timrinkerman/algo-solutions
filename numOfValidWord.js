var findNumOfValidWords = function(words, puzzles) {
    let outPut = []
    
    for(let i=0; i<puzzles.length; i++){
        let currentPuzzle = puzzles[i]
        let count = 0
        for(let j=0; j<words.length; j ++){
            let currentWord = words[j]
            if(!currentWord.includes(currentPuzzle[0])){ 
                continue
            }else {
              for(let k=0; k<currentWord.length; k++){
                  if(!currentPuzzle.includes(currentWord[k])) break
                    if(k == currentWord.length - 1)
                        count ++
              }
              }
        }
            outPut.push(count)
    }
        return outPut
    
    };