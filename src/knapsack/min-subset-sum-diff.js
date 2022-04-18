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

  return prev;
};

export default function minSubsetSumDiff(arr = []) {
  const sum = Math.max(arr.reduce((a, b) => a + b, 0), Math.max(...arr));
  const hasSubsetSum = hasSubsetSumTabOpt(arr, sum);
  let minDiff = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= sum / 2; i += 1) {
    if (hasSubsetSum[i]) { minDiff = Math.min(minDiff, sum - (2 * i)); }
  }

  return minDiff;
}
