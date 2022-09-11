var wordBreak = function(s, wordDict) {
    var dp = Array(s.length + 1).fill(false);
    dp[dp.length - 1] = true;
    for (var i = s.length - 1; i >=0; i--){
        for (var w = 0; w < wordDict.length; w++) {
            if (s.slice(i,i + wordDict[w].length) === wordDict[w]) {
                dp[i] = dp[i + wordDict[w].length]
            }
            if (dp[i]) {
                break;
            }
        }
    }
    console.log(dp[0]);
    return dp[0];
};

wordBreak('abcd',["a","abc","b","cd"]);