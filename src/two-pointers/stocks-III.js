export const stocks = (prices = []) => {
  const dp = new Map();
  const stocksHelper = (priceIndex = 0, k = 2, hasBought = 0) => {
    if (priceIndex === prices.length || k === 0) { return 0; }

    const key = `${priceIndex}_${k}_${hasBought}`;

    if (dp.has(key)) { return dp.get(key); }
    if (hasBought) {
      const profit = Math.max(
        prices[priceIndex] + stocksHelper(priceIndex + 1, k - 1, 0),
        stocksHelper(priceIndex + 1, k, hasBought),
      );

      dp.set(key, profit);

      return profit;
    }

    const profit = Math.max(
      -prices[priceIndex] + stocksHelper(priceIndex + 1, k, 1),
      stocksHelper(priceIndex + 1, k, hasBought),
    );

    dp.set(key, profit);

    return profit;
  };

  return stocksHelper();
};

export const stocksTab = (prices = []) => {
  let prev = Array(3).fill(-1).map(() => Array(2).fill(0));

  for (let i = prices.length - 1; i >= 0; i -= 1) {
    const curr = Array(3).fill(-1).map(() => Array(2).fill(0));

    for (let j = 1; j <= 2; j += 1) {
      curr[j] = [
        Math.max(-prices[i] + prev[j][1], prev[j][0]),
        Math.max(prices[i] + prev[j - 1][0], prev[j][1]),
      ];
    }

    prev = curr;
  }

  return prev[2][0];
};
