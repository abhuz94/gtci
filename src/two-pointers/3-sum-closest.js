// TC - O(N^2) SC - O(1)

export default function threeSumClosest(arr = [], target = 0) {
  if (arr.length < 3) { return Number.POSITIVE_INFINITY; }

  arr.sort((a, b) => a - b);

  const N = arr.length - 3;
  let minDiff = Number.POSITIVE_INFINITY;
  let sum = Number.POSITIVE_INFINITY;

  for (let i = 0; i <= N; i += 1) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currSum = arr[i] + arr[left] + arr[right];

      if (currSum === target) { return currSum; }

      const currDiff = Math.abs(currSum - target);

      if (currDiff < minDiff) {
        minDiff = currDiff;
        sum = currSum;
      }

      if (currSum > target) {
        do { right -= 1; } while (right > left && arr[right] === arr[right + 1]);
      } else {
        do { left += 1; } while (left < right && arr[left] === arr[left - 1]);
      }
    }

    while (i < N && arr[i] === arr[i + 1]) { i += 1; }
  }

  return sum;
}
