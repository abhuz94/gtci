// TC - O(logN) SC - O(1)

export default function numberRange(arr = [], key = undefined) {
  const binarySearch = (isLeft = false) => {
    let possibleIndex = -1;
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = low + ((high - low) / 2) >> 0;

      if (arr[mid] === key) {
        possibleIndex = mid;

        if (isLeft) { high = mid - 1; } else { low = mid + 1; }
      } else if (key < arr[mid]) { high = mid - 1; } else { low = mid + 1; }
    }

    return possibleIndex;
  };

  const leftRange = binarySearch(true);

  if (leftRange === -1) { return [-1, -1]; }

  return [leftRange, binarySearch()];
}
