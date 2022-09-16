var rob = function(nums) {
    // [rob1 rob2, n, n + 1, ...]
    var rob1 = 0;
    var rob2 = 0;
    
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    var temp = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  console.log(rob2);
  return rob2;
};


nums = [2, 7, 9, 3, 1];
rob(nums);
