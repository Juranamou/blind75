var nums = [-1,0,1,2,-1,-4];
var threeSum = function (nums) {
  var res = [];
  nums = nums.sort((a, b) => {return a - b});
  for (var i = 0; i < nums.length; i++) {
    var a = nums[i];
    if (i > 0 && a === nums[i - 1]) {
      continue;
    }
    var l = i + 1;
    var r = nums.length - 1;
    while (l < r) {
      var threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r -= 1;
      } else if ( threeSum < 0) {
        l += 1;
      } else {
        res.push([a, nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  console.log(JSON.stringify(res));
  return res;
};

threeSum(nums);