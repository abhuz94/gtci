export const stocks = (k, prices) => {
  const dp = new Map();
  const stocksHelper = (priceIndex = 0, txnCount = k, hasBought = 0) => {
    if (priceIndex === prices.length || txnCount === 0) { return 0; }

    const key = `${priceIndex}_${txnCount}_${hasBought}`;

    if (dp.has(key)) { return dp.get(key); }
    if (hasBought) {
      const profit = Math.max(
        prices[priceIndex] + stocksHelper(priceIndex + 1, txnCount - 1, 0),
        stocksHelper(priceIndex + 1, txnCount, hasBought),
      );

      dp.set(key, profit);

      return profit;
    }

    const profit = Math.max(
      -prices[priceIndex] + stocksHelper(priceIndex + 1, txnCount, 1),
      stocksHelper(priceIndex + 1, txnCount, hasBought),
    );

    dp.set(key, profit);

    return profit;
  };

  return stocksHelper();
};

export const stocksTab = (k, prices) => {
  let prev = Array(k + 1).fill(-1).map(() => Array(2).fill(0));

  for (let i = prices.length - 1; i >= 0; i -= 1) {
    const curr = Array(k + 1).fill(-1).map(() => Array(2).fill(0));

    for (let j = 1; j <= k; j += 1) {
      curr[j] = [
        Math.max(-prices[i] + prev[j][1], prev[j][0]),
        Math.max(prices[i] + prev[j - 1][0], prev[j][1]),
      ];
    }

    prev = curr;
  }

  return prev[k][0];
};
