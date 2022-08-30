nums = [2,3,-2,4];
var maxProduct = function(nums) {
    var maxPro = nums[0];
    currentPro = 1;
    for (var i = 0; i < nums.length; i++) {
      currentPro *= nums[i];
      maxPro = Math.max(currentPro, maxPro);
    }
    console.log(maxPro);
    return maxPro;
};

maxProduct(nums);