var nums = [1, 2, 3, 4];

function exceptSelf(nums) {
  var array = [];
  for (var i = 0; i < nums.length; i++) {
    var pre = nums.slice(0, i);
    var post = nums.slice(i + 1, nums.length);
    var except = pre.concat(post);
    var multiplied = except.reduce((prev, curr) => { return prev * curr }, 1);
    array.push(multiplied);
  }
  console.log(array);
  return array;
}

exceptSelf(nums);

function exceptSelf(nums) {
  var result = Array(nums.length).fill(1);
  var pre = 1;
  for (var i = 0; i < nums.length; i++) {
    result[i] = pre;
    pre = pre * nums[i];
  }
  var post = 1;
  for (var j = nums.length - 1; j >= 0; j--) {
    result[j] = result[j] * post;
    post = post * nums[j];
  }
  console.log(result);
  return result;
}