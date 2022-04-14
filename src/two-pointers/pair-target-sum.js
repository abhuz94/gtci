// TC - O(N) SC - O(1)

export default function pairTargetSum(arr = [], target = Number.POSITIVE_INFINITY) {
  if (arr.length < 2) { return []; }

  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const sum = arr[low] + arr[high];

    if (sum === target) { return [low, high]; }
    if (sum < target) { low += 1; } else { high -= 1; }
  }

  return [];
}
