// TC - O(logN) SC - O(1)

export default function nextLetter(arr = [], char = '') {
  if (char >= arr[arr.length - 1]) { return arr[0]; }

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) / 2) >> 0;

    if (char >= arr[mid]) { low = mid + 1; } else { high = mid - 1; }
  }

  return arr[low % arr.length];
}
