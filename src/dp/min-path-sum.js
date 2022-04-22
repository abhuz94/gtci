export const minPathSum = (grid) => {
  const M = grid.length;
  const N = grid[0].length;
  const dp = Array(M + 1).fill(-1).map(() => Array(N + 1).fill(-1));

  const minPathSumHelper = (m = M, n = N) => {
    if (m === 1 && n === 1) { return grid[m - 1][n - 1]; }
    if (m <= 0 || n <= 0) { return Number.POSITIVE_INFINITY; }
    if (dp[m][n] !== -1) { return dp[m][n]; }

    return (dp[m][n] = Math.min(
      minPathSumHelper(m - 1, n),
      minPathSumHelper(m, n - 1),
    ) + grid[m - 1][n - 1]);
  };

  return minPathSumHelper();
};

export const minPathSumTab = (grid) => {
  const M = grid.length;
  const N = grid[0].length;
  let prev = Array(N + 1).fill(Number.POSITIVE_INFINITY);
  // eslint-disable-next-line prefer-destructuring
  prev[1] = grid[0][0];

  for (let i = 1; i <= M; i += 1) {
    const curr = Array(N + 1).fill(Number.POSITIVE_INFINITY);
    // eslint-disable-next-line prefer-destructuring
    curr[1] = grid[0][0];

    for (let j = 1; j <= N; j += 1) {
      // eslint-disable-next-line no-continue
      if (i === 1 && j === 1) { continue; }
      curr[j] = Math.min(prev[j], curr[j - 1]) + grid[i - 1][j - 1];
    }

    prev = curr;
  }

  return prev[N];
};
