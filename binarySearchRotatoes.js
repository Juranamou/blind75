nums = [4,5,6,7,0,1,2];
// nums = [7,0,1,2,4,5,6];
target = 0;
// expected output = 4;
var search = function(nums, target) {
  var l = 0;
  var r = nums.length - 1;
  while(l <= r) {
    var midPoint = (Math.floor((l + r) / 2));
    if (target === nums[midPoint]) {
      console.log(midPoint);
      return midPoint;
    }
    if (nums[l] < nums[midPoint]) {
      if (target > nums[midPoint] || target < nums[l]) {
        l = midPoint + 1;
      } else {
        r = midPoint - 1;
      }
    } else {
      if (target < nums[midPoint] || target > nums[r]) {
        r = midPoint - 1;
      } else {
        l = midPoint + 1;
      }
    }
  }
};

search(nums, target);