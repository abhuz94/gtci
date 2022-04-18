/* eslint-disable no-unused-vars */
// TC - O(2^N) SC - O(N)

const hasSubsetSum = (arr = [], target = 0, currIndex = arr.length) => {
  if (currIndex === 0) { return target === 0; }
  if (arr[currIndex - 1] > target) { return hasSubsetSum(arr, target, currIndex - 1); }

  return hasSubsetSum(arr, target, currIndex - 1)
    || hasSubsetSum(arr, target - arr[currIndex - 1], currIndex - 1);
};

// TC - O(N * T) SC - O(N * T)

const hasSubsetSumTab = (arr = [], target = 0) => {
  const dp = Array(arr.length + 1).fill(-1).map(() => Array(target + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= arr.length; i += 1) {
    for (let j = 1; j <= target; j += 1) {
      dp[i][j] = arr[i - 1] > j
        ? dp[i - 1][j]
        : dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
    }
  }

  return dp[arr.length][target];
};

// TC - O(N * T) SC - O(T)

const hasSubsetSumTabOpt = (arr = [], target = 0) => {
  const prev = Array(target + 1).fill(false);
  prev[0] = true;

  for (let i = 1; i <= arr.length; i += 1) {
    for (let j = target; j >= 1; j -= 1) {
      prev[j] = arr[i - 1] > j
        ? prev[j]
        : prev[j] || prev[j - arr[i - 1]];
    }
  }

  return prev[target];
};

export default function canPartition(arr = []) {
  const sum = arr.reduce((a, b) => a + b, 0);

  return sum % 2 === 0
    ? hasSubsetSumTabOpt(arr, sum / 2)
    : false;
}
