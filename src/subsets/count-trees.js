// TC - O(N^2) SC - O(N)

export default function countTrees(num) {
  const dp = Array(num + 1).fill(-1);
  const computeCatalan = (n = num) => {
    if (n <= 1) { return 1; }
    if (dp[n] !== -1) { return dp[n]; }

    let res = 0;

    for (let i = 0; i < n; i += 1) {
      res += computeCatalan(i) * computeCatalan(n - i - 1);
    }

    return (dp[n] = res);
  };

  return computeCatalan();
}
