var containsNearbyDuplicate = function(nums, k) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        hash[number] ? hash[number].push(i) : hash[number] = [i]
    }
    for (let num in hash) {
       if (hash[num].length > 1) {
           for (let i = 0; i < hash[num].length; i++) {
               if (hash[num][i + 1] - hash[num][i] <= k) return true
           }
       }
    }
    return false
};