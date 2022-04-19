// TC - O(N) SC - O(1)

export default function squareSortedArray(arr = []) {
  const sortedArray = [];
  let left = 0;
  let right = arr.length - 1;
  let sortedArrayIndex = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    if (rightSquare > leftSquare) {
      sortedArray[sortedArrayIndex] = rightSquare;
      right -= 1;
    } else {
      sortedArray[sortedArrayIndex] = leftSquare;
      left += 1;
    }

    sortedArrayIndex -= 1;
  }

  return sortedArray;
}
