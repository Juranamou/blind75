var twoSum = function(numbers, target) {
  var l = 0;
  var r = numbers.length - 1;

  while (l < r) {
    var currentSum = numbers[l] + numbers[r];
    if (currentSum > target) {
      r -= 1;
    } else if (currentSum < target) {
      l += 1;
    } else {
      return [l + 1, r + 1];
    }
  }
};