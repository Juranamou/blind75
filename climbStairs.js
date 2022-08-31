coins = [1, 2, 5];
amount = 11;

var coinChange = function (coins, amount) {
  var count = 0;
  for (var i = coins.length - 1; i >= 0; i--) {
    console.log(amount/coins[i]);
    count += Math.trunc(amount/coins[i]);
    amount = amount - coins[i] * count;
  }
  console.log(count);
};

coinChange(coins, amount);