
//arrays and math baby
//look at each op item
//if matches condition do some work
// + = adding two previous ints
// D = doubling previous val
// C = invalidating and striking pervious from record 

//for loop with 3 if els
//else push x to array

var calPoints = function(ops) {
   let temp = []

   for(let i = 0; i < ops.length; i++){
     if(ops[i] == "+"){
        temp.push(temp[temp.length-1] + temp[temp.length-2])
     }else if(ops[i] == "D"){
         temp.push(temp[temp.length-1] * 2)
     }else if(ops[i] == "C"){
       temp.pop()          
     }else{
         temp.push(parseInt(ops[i]))
       }
   }   
   return temp.reduce((a,b) => a+b)
};