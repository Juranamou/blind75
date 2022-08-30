nums = [3,4,5,1,2];

var findMin = function(nums) {
  var midPoint = (Math.floor(nums.length/2));
  var right = nums.length - 1;
  var left = 0;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      right = midPoint;
    } else {
      left = midPoint;
    }
    midPoint = (Math.floor((left + right)/2));
  }
};

findMin(nums);