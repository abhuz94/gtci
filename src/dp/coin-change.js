export const coinChange = (coins, initialAmount) => {
  const dp = Array(coins.length + 1).fill(-1).map(() => Array(initialAmount + 1).fill(-1));
  const coinChangeHelper = (coinIndex = coins.length, amount = initialAmount) => {
    if (coinIndex === 0) { return Number.POSITIVE_INFINITY; }
    if (coinIndex === 1) {
      return amount % coins[coinIndex - 1] === 0
        ? amount / coins[coinIndex - 1]
        : Number.POSITIVE_INFINITY;
    }
    if (dp[coinIndex][amount] !== -1) { return dp[coinIndex][amount]; }
    if (coins[coinIndex - 1] > amount) {
      return (dp[coinIndex][amount] = coinChangeHelper(coinIndex - 1, amount));
    }

    return (dp[coinIndex][amount] = Math.min(
      1 + coinChangeHelper(coinIndex, amount - coins[coinIndex - 1]),
      coinChangeHelper(coinIndex - 1, amount),
    ));
  };

  const numOfCoins = coinChangeHelper();

  return numOfCoins === Number.POSITIVE_INFINITY ? -1 : numOfCoins;
};

export const coinChangeTab = (coins, initialAmount) => {
  if (initialAmount === 0) { return 0; }

  let prev = Array(initialAmount + 1).fill(0);

  for (let i = 1; i <= initialAmount; i += 1) {
    prev[i] = i % coins[0] === 0
      ? i / coins[0]
      : Number.POSITIVE_INFINITY;
  }

  for (let i = 2; i <= coins.length; i += 1) {
    const curr = Array(initialAmount + 1).fill(0);

    for (let j = 1; j <= initialAmount; j += 1) {
      curr[j] = coins[i - 1] > j
        ? prev[j]
        : Math.min(1 + curr[j - coins[i - 1]], prev[j]);
    }

    prev = curr;
  }

  const numOfCoins = prev[initialAmount];

  return numOfCoins === Number.POSITIVE_INFINITY ? -1 : numOfCoins;
};
