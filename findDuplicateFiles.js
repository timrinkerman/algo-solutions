var findDuplicate = function(paths) {
    let answerArray = []
    let fileMap = {}
    for(let i = 0; i < paths.length; i ++){
       let path = paths[i]
       let split = path.split(' ')
       let root = split[0]
       for(let j = 1; j < split.length; j ++){
           let open = split[j].indexOf('(')
           let content = split[j].slice(open)
           let filePath = split[j].slice(0, open)
           fileMap[content] ?  fileMap[content].push((root + "/" + filePath)): fileMap[content] = [root + "/" + filePath ]   
       }
    }
    for(let val in fileMap){
       answerArray.push(fileMap[val])
    }
    return answerArray.filter(array => array.length > 1)
};
// loop through each string, for each () in the string create a new key and put the root and text prior to the () into a hashmap
// then for the keys in the map, push the values into an answer array. 
// filter out the entire array if it's less than 2 in length since that means there are no duplicates.