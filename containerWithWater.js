height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var maxArea = function (height) {
  var max = 0;
  var l = 0;
  var r = height.length - 1;
  while (l < r) {
    var width = r - l;
    var minHeight = Math.min(height[l], height[r]);
    max = Math.max(max, (width * minHeight));
    if (height[r] < height[l]){
      r -= 1;
    } else {
      l += 1;
    }
  }
  console.log(max);
  return max;
};

maxArea(height);