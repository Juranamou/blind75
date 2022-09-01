coins = [1, 3, 4, 5];
amount = 7;
var coinChange = function(coins, amount) {
  var dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (var a = 1; a < amount + 1; a++) {
    for (var c = 0; c < coins.length; c++) {
      var coin = coins[c];
      if ((a - coin) >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - coin])
      }
    }
  }
  console.log(dp);
  if (dp[amount] !== amount + 1) {
    return dp[amount]
  } else {
    return -1;
  }
};

coinChange(coins, amount);