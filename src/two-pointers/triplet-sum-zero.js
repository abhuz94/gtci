// TC - O(NlogN) + O(N^2) SC - O()

export default function tripletSumZero(arr = []) {
  if (arr.length < 3) { return []; }

  arr.sort((a, b) => a - b);

  const triplets = [];
  const N = arr.length - 3;

  for (let i = 0; i <= N; i += 1) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) { triplets.push([arr[i], arr[left], arr[right]]); }
      if (sum <= 0) { do { left += 1; } while (left < right && arr[left - 1] === arr[left]); }
      if (sum >= 0) { do { right -= 1; } while (right > left && arr[right + 1] === arr[right]); }
    }

    while (i < N && arr[i] === arr[i + 1]) { i += 1; }
  }

  return triplets;
}
