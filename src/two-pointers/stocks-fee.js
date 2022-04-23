export const stocksFee = (prices = [], fee = 0) => {
  const dp = Array(prices.length).fill(-1).map(() => Array(2).fill(-1));
  const stocksFeeHelper = (priceIndex = 0, hasBought = 0) => {
    if (priceIndex === prices.length) { return 0; }
    if (dp[priceIndex][hasBought] !== -1) { return dp[priceIndex][hasBought]; }
    if (hasBought) {
      return (dp[priceIndex][hasBought] = Math.max(
        -fee + prices[priceIndex] + stocksFeeHelper(priceIndex + 1, 0),
        stocksFeeHelper(priceIndex + 1, hasBought),
      ));
    }

    return (dp[priceIndex][hasBought] = Math.max(
      -prices[priceIndex] + stocksFeeHelper(priceIndex + 1, 1),
      stocksFeeHelper(priceIndex + 1, hasBought),
    ));
  };

  return stocksFeeHelper();
};

export const stocksFeeTab = (prices = [], fee = 0) => {
  let prev = Array(2).fill(0);
  for (let i = prices.length - 1; i >= 0; i -= 1) {
    prev = [
      Math.max(-prices[i] + prev[1], prev[0]),
      Math.max(-fee + prices[i] + prev[0], prev[1]),
    ];
  }

  return prev[0];
};
