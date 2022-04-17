// TC - O(logN) SC - O(1)

export default function infiniteSortedArraySearch(arr = [], key = undefined) {
  let low = 0;
  let high = 1;

  while (key > arr[high]) {
    if (key === arr[high]) { return high; }

    high += high * 2;
  }

  while (low <= high) {
    const mid = low + ((high - low) / 2) >> 0;

    if (arr[mid] === key) { return mid; }
    if (key < arr[mid]) { high = mid - 1; } else { low = mid + 1; }
  }

  return -1;
}
