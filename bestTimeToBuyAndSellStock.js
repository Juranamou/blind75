var prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function(prices) {
  var min = [prices[0], 0];
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min[0]) {
      min = [prices[i], i]
    }
  }
  var max = [0, 0]
  for (var i = min[1] + 1; i < prices.length; i++) {
    if (prices[i] > max[0]) {
      max = [prices[i], i]
    }
  }
  console.log(max[0] - min[0]);
  return max[0] - min[0];
}

maxProfit(prices);