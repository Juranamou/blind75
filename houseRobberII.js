var rob = function(nums) {
    return (Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)), nums[0]))
};

var helper=function(nums) {
    var rob1 = 0;
    var rob2 = 0;
    for (var i = 0; i < nums.length; i++) {
        currentHouse = nums[i];
        var newRob = Math.max(rob1 + currentHouse, rob2);
        rob1 = rob2;
        rob2 = newRob;
    }
    return rob2;
}

nums = [1,2,3,1]
rob(nums);

