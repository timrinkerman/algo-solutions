var fourSum = function(nums, target) {
    const output = [];
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length-3; i++) {
        for (let j = i+1; j < nums.length-2; j++) {
            let small = j + 1;
            let large = nums.length - 1;
            while (small < large) {
                let total = nums[i] + nums[j] + nums[small] + nums[large];
                if (total === target) {
                    output.push([nums[i], nums[j], nums[small], nums[large]]);
                    small++;
                    large--;
                    while (nums[small] === nums[small-1]) small++;
                    while (nums[large] === nums[large+1]) large--;
                } else if (total < target) {
                    small++;
                } else {
                    large--;
                }
            }
            while (nums[j] === nums[j+1])j++;
        }
        while (nums[i] === nums[i+1])i++;
    }
    return output;
};