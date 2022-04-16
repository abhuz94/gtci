// TC - O(N) SC - O(1)

export default function cyclicSort(arr = []) {
  const swap = (i, j) => {
    if (i !== j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  };

  for (let i = 0; i < arr.length; i += 1) {
    while (i !== arr[i] - 1) { swap(i, arr[i] - 1); }
  }

  return arr;
}
