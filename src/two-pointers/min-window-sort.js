// TC - O(N) SC - O(1)

export default function minWindowSort(arr = []) {
  let i = 0;
  let j = arr.length - 1;

  while (i + 1 < arr.length && arr[i] < arr[i + 1]) { i += 1; }

  if (i === arr.length - 1) { return 0; }

  while (j - 1 >= 0 && arr[j] > arr[j - 1]) { j -= 1; }

  let minEle = arr[i];
  let maxEle = arr[j];

  for (let k = i; k <= j; k += 1) {
    minEle = Math.min(minEle, arr[k]);
    maxEle = Math.max(maxEle, arr[k]);
  }

  while (i - 1 >= 0 && minEle < arr[i - 1]) { i -= 1; }
  while (j + 1 < arr.length && maxEle > arr[j + 1]) { j += 1; }

  return j - i + 1;
}
