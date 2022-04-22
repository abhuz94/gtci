export const uniquePaths = (grid) => {
  const dp = Array(grid.length + 1).fill(-1).map(() => Array(grid[0].length + 1).fill(-1));
  const uniquePathsHelper = (m = grid.length, n = grid[0].length) => {
    if (m <= 0 || n <= 0 || grid[m - 1][n - 1] === 1) { return 0; }
    if (m === 1 && n === 1) { return 1; }
    if (dp[m][n] !== -1) { return dp[m][n]; }

    return (dp[m][n] = uniquePathsHelper(m - 1, n) + uniquePathsHelper(m, n - 1));
  };

  return uniquePathsHelper();
};

export const uniquePathsTab = (grid) => {
  const dp = Array(grid.length + 1).fill(-1).map(() => Array(grid[0].length + 1).fill(0));
  dp[1][1] = grid[0][0] === 1 ? 0 : 1;

  for (let i = 1; i <= grid.length; i += 1) {
    for (let j = 1; j <= grid[0].length; j += 1) {
      // eslint-disable-next-line no-continue
      if (i === 1 && j === 1) { continue; }
      dp[i][j] = grid[i - 1][j - 1] === 1
        ? 0
        : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[grid.length][grid[0].length];
};
