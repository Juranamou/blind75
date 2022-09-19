var uniquePaths = function(m, n) {
    
    const result = [[]];
    for (let i = 0; i < n; i += 1) {
      result[0].push(1);
    }
    for (let i = 1; i < m; i += 1) { 
      result.push([1]);  
      for (let j = 1; j < n; j += 1) {
        result[i][j] = result[i][j - 1] + result[i - 1][j];
      }
    }
    return result[m - 1][n - 1];
  
  };