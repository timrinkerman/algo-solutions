
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
         let outPut = []
         let start = intervals[0][0]
         let end = intervals[0][1]
      
         
         for(let i = 1; i < intervals.length; i++){
          if(end >= intervals[i][0]){
              end = Math.max(end, intervals[i][1]) 
              
          }else{
              outPut.push([start, end])
              start = intervals[i][0]
              end = intervals[i][1]
          }
            
      }  
      outPut.push([start, end])
      return outPut
  };
  