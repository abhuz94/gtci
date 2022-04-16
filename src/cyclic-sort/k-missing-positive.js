// TC - O(N) SC - O(1)

export default function kMissingPositive(arr = [], k = 0) {
  const missingPositives = [];
  const swap = (i, j) => {
    if (i !== j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  };
  const isInBounds = (i) => i >= 0 && i < arr.length;
  let max = 0;

  for (let i = 0; i < arr.length && missingPositives.length < k; i += 1) {
    while (i !== arr[i] - 1 && isInBounds(arr[i] - 1) && arr[i] !== arr[arr[i] - 1]) {
      swap(arr[i] - 1, i);
    }

    if (i !== arr[i] - 1) { missingPositives.push(i + 1); }

    max = Math.max(arr[i], max);
  }

  max = Math.max(max, missingPositives[missingPositives.length - 1]);

  while (missingPositives.length < k) {
    max += 1;

    missingPositives.push(max);
  }

  return missingPositives;
}
