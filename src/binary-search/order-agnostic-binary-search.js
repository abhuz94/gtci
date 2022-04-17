// TC - O(logN) SC - O(1)

export default function orderAgnosticBinarySearch(arr = [], key = undefined) {
  let low = 0;
  let high = arr.length - 1;
  const isAscending = arr[low] < arr[high];

  while (low <= high) {
    const mid = low + ((high - low) / 2) >> 0;

    if (arr[mid] === key) { return mid; }
    if (key < arr[mid]) {
      if (isAscending) { high = mid - 1; } else { low = mid + 1; }
    } else if (isAscending) { low = mid + 1; } else { high = mid - 1; }
  }

  return -1;
}
