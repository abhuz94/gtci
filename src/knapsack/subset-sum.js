// TC - O(N * T) SC - O(T)

export default function hasSubsetSumTabOpt(arr = [], target = 0) {
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
}
