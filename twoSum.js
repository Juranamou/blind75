var nums = [5, 6, 4, 1];
var target = 5;

function twoSum(nums, target) {
  var storage = {};
  for (var i = 0; i < nums.length; i++) {
    var currentVal = nums[i];
    storage[nums[i]] = i;
    var neededVal = target - currentVal;
    if (storage[neededVal]) {
      console.log([i, storage[neededVal]]);
      return [i, storage[neededVal]];
    }
  }
}

twoSum(nums, target);