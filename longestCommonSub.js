var longestCommonSubsequence = function (text1, text2) {
    var grid = Array(text1.length + 1).fill(Array(text2.length + 1).fill(0));
    for (var i = grid.length - 2; i>=0; i--) {
        for (var j = grid[0].length - 2; j>=0; j--) {
            if (text1[i] === text2[j]) {
                grid[i][j] = 1 + grid[i + 1][j + 1];
            } else {
                grid[i][j] = Math.max(grid[i + 1][j], grid[i][j + 1])
            }
        }
    }
    console.log(grid[0][0]);
    return grid[0][0];
};

longestCommonSubsequence('abcde', 'abc');