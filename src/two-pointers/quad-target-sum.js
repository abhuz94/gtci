// TC - O(NlogN) + O(N^3) SC - O(1)

export default function quadTargetSum(arr = [], target = 0) {
  if (arr.length < 4) { return 0; }

  arr.sort((a, b) => a - b);

  const quads = [];
  const N = arr.length - 4;

  for (let i = 0; i <= N; i += 1) {
    for (let j = i + 1; j <= N + 1; j += 1) {
      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (sum === target) { quads.push([arr[i], arr[j], arr[left], arr[right]]); }
        if (sum <= target) {
          do { left += 1; } while (left < right && arr[left] === arr[left - 1]);
        }
        if (sum >= target) {
          do { right -= 1; } while (right > left && arr[right] === arr[right + 1]);
        }
      }

      while (j < N + 1 && arr[j] === arr[j + 1]) { j += 1; }
    }

    while (i < N && arr[i] === arr[i + 1]) { i += 1; }
  }

  return quads;
}
