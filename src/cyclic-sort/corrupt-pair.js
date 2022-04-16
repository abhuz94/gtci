// TC - O(N) SC - O(1)

export default function corruptPair(arr = []) {
  const swap = (i, j) => {
    if (i !== j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  };

  for (let i = 0; i < arr.length; i += 1) {
    while (i !== arr[i] - 1 && arr[i] !== arr[arr[i] - 1]) {
      swap(arr[i] - 1, i);
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (i !== arr[i] - 1) {
      return [arr[i], i + 1];
    }
  }

  return [];
}
