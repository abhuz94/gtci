// TC - O(logN) SC - O(1)

export default function binarySearch(arr = [], key = undefined) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = (low + ((high - low) / 2)) >> 0;

    if (arr[mid] === key) { return mid; }
    if (key < arr[mid]) { high = mid - 1; } else { low = mid + 1; }
  }

  return -1;
}
