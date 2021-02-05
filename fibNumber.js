/**
 * @param {number} n
 * @return {number}
 */
//F(n) = F(n - 1) + F(n - 2), for n > 1.
// fib()
//if f(n) !== memo[n] 
//f(n) = F(n - 1) + F(n - 2), for n > 1.


var fib = function(n) {
    
    let memo = {}
    
    const f = (q) =>{
         if(memo[q]) return memo[q] 
         if(q == 0) return 0    
         if(q == 1) return 1 
            memo[q] = f(q-1) + f(q-2)
            return memo[q]
    
    }
   return f(n)
};