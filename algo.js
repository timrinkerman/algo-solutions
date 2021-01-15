/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//output.length = 2
//input.length = [n]
//targert - output[n] == output[n] sort of
//pre: when I have a set of numbers and a target that two of those said numbers will add up to
//post: i will iterate through the array and subtract each number from the target, and compare against the rest of the array to see if that meets requirements


var twoSum = function(nums, target) {
    let output = {}
        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i]
            const neededNum = target - currentNum 
            const value2 = output[neededNum]
            if(value2 != null){
                return [value2, i]
            }else{
                output[currentNum] = i
            }
        }
    };
    
    