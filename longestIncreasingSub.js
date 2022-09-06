var lengthOfLIS = function(nums) {
    var storage = Array(nums.length).fill(1);
    console.log(storage);
    for (var i = nums.length - 1; i >= 0; i--) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]){
                storage[i] = Math.max(storage[i], 1 + storage[j]);
            }
        }
    }
    return Math.max(...storage);
};

lengthOfLIS([10, 9, 2, 5, 3, 5, 101, 18]);