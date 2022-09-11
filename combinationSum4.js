var combinationSum4 = function (nums, target) {
    var dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (var i = 0; i <= target; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) { dp[i] =  dp[i] + dp[i - nums[j]] }
        }
    }
    console.log(dp[target]);
    return dp[target];
};

combinationSum4([1, 2, 3], 4);