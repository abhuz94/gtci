export default function stocksCooldown(prices = []) {
  const dp = Array(prices.length).fill(-1).map(() => Array(2).fill(-1));
  const stocksCooldownHelper = (priceIndex = 0, hasBought = 0) => {
    if (priceIndex >= prices.length) { return 0; }
    if (dp[priceIndex][hasBought] !== -1) { return dp[priceIndex][hasBought]; }
    if (hasBought) {
      return (dp[priceIndex][hasBought] = Math.max(
        prices[priceIndex] + stocksCooldownHelper(priceIndex + 2, 0),
        stocksCooldownHelper(priceIndex + 1, hasBought),
      ));
    }

    return (dp[priceIndex][hasBought] = Math.max(
      -prices[priceIndex] + stocksCooldownHelper(priceIndex + 1, 1),
      stocksCooldownHelper(priceIndex + 1, hasBought),
    ));
  };

  return stocksCooldownHelper();
}
