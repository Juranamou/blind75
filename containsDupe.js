var nums =[1, 2, 3, 1];
var containsDuplicate = function(nums) {
  var storage = {};
  for (var i = 0; i < nums.length; i++) {
      if(storage[nums[i]] === undefined) {
          storage[nums[i]] = 0;
      } else {
          storage[nums[i]] = 1;
      }
  }
  if(Object.values(storage).includes(1)) {
      console.log(true);
      return true;
  }
  console.log(false);
  return false;
};

containsDuplicate(nums);
