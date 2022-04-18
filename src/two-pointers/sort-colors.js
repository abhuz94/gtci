// TC - O(N) SC - O(1)

export default function sortColors(arr = []) {
  const swap = (i, j) => {
    if (i !== j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(low, mid);

      low += 1;
      mid += 1;
    } else if (arr[mid] === 1) {
      mid += 1;
    } else {
      swap(mid, high);

      high -= 1;
    }
  }

  return arr;
}
