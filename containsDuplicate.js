var containsDuplicate = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        hash[number] ? hash[number]++ : hash[number] = 1
        if (hash[number] > 1) return true
    }
    return false
};