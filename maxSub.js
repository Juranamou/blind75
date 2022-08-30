var nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
  var maxSub = nums[0];
  var currentSub = 0;
  for (var i = 0; i < nums.length; i++) {
    if (currentSub < 0) {
      currentSub = 0;
    }
    currentSub += nums[i];
    maxSub = Math.max(currentSub, maxSub);
  }
  console.log(maxSub);
  return maxSub;
};

maxSubArray(nums);