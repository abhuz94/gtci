export const coinChange = (initialAmount, coins) => {
  if (!coins.length) { return 0; }

  const dp = Array(initialAmount + 1).fill(-1).map(() => Array(coins.length + 1).fill(-1));
  const coinChangeHelper = (amount = initialAmount, coinIndex = coins.length) => {
    if (coinIndex === 0) { return 0; }
    if (amount === 0) { return 1; }
    if (coinIndex === 1) { return Number(amount % coins[0] === 0); }
    if (dp[amount][coinIndex] !== -1) { return dp[amount][coinIndex]; }
    if (coins[coinIndex - 1] > amount) {
      return (dp[amount][coinIndex] = coinChangeHelper(amount, coinIndex - 1));
    }

    return (dp[amount][coinIndex] = coinChangeHelper(amount, coinIndex - 1)
        + coinChangeHelper(amount - coins[coinIndex - 1], coinIndex));
  };

  return coinChangeHelper();
};

export const coinChangeTab = (initialAmount, coins) => {
  if (!coins.length) { return 0; }

  const dp = Array(initialAmount + 1).fill(-1).map(() => Array(coins.length + 1).fill(0));

  for (let i = 0; i <= coins.length; i += 1) { dp[0][i] = 1; }
  for (let i = 1; i <= initialAmount; i += 1) {
    for (let j = 1; j <= coins.length; j += 1) {
      dp[i][j] = coins[j - 1] > i
        ? dp[i][j - 1]
        : dp[i][j - 1] + dp[i - coins[j - 1]][j];
    }
  }

  return dp[initialAmount][coins.length];
};
