// nums = [3,4,5,1,2];
nums = [4,5,0,1,2,3];

var findMin = function(nums) {
  var right = nums.length - 1;
  var left = 0;
  var res = nums[0];

  while (left <= right) {
    // condition where its not rotated at all
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }
    // have to check if the midPoint is the minimum value
    midPoint = (Math.floor((left + right)/2));
    res = Math.min(res, nums[midPoint]);
    // part of the sorted array that has been rotated
    if (nums[midPoint] > nums[left]) {
      left = midPoint + 1;
    } else {
      right = midPoint - 1;
    }
  }
  console.log(res);
  return res;
};

findMin(nums);