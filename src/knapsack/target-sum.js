// TC - O(N * T) SC - O(T)

// const subsetSumCount = (arr = [], initialTarget = 0) => {
//   const buffer = initialTarget < 0 ? Math.abs(initialTarget) : 0; // -ve elements
//   const dp = Array(arr.length + 1).fill(-1)
//      .map(() => Array(Math.abs(initialTarget) + 1).fill(-1));
//   const hasSubsetSumHelper = (currIndex = arr.length, target = initialTarget) => {
//     if (currIndex === 0) { return Number(target === 0); }
//     if (dp[currIndex][buffer + target] !== -1) { return dp[currIndex][buffer + target]; }
//     if (arr[currIndex - 1] > target) {
//       return (dp[currIndex][buffer + target] = hasSubsetSumHelper(currIndex - 1, target));
//     }

//     return (dp[currIndex][target + buffer] = hasSubsetSumHelper(currIndex - 1, target)
//       + hasSubsetSumHelper(currIndex - 1, target - arr[currIndex - 1]));
//   };

//   return hasSubsetSumHelper();
// };

// TC - O(N * C) SC - O(C)

const subsetSumCount = (arr = [], target = 0) => {
  let zeroesCount = 0;
  const prev = Array(target + 1).fill(0);
  prev[0] = 1;

  for (let i = 1; i <= arr.length; i += 1) {
    for (let j = target; j >= 1; j -= 1) {
      if (arr[i - 1] === 0) { zeroesCount += 1; }

      prev[j] = arr[i - 1] > j
        ? prev[j]
        : prev[j] + prev[j - arr[i - 1]];
    }
  }

  return 2 ** zeroesCount * prev[target];
};

export default function targetSum(arr = [], diff = 0) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const target = (sum + diff) / 2;

  return target % 1 === 0
    ? subsetSumCount(arr, target)
    : 0;
}
