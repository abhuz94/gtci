// TC - O(N!) SC - O(N)

export default function permutations(arr = []) {
  const res = [];
  const swap = (i, j) => {
    if (i !== j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  };
  // eslint-disable-next-line consistent-return
  const permutationsHelper = (low = 0) => {
    if (low >= arr.length) { return res.push([...arr]); }

    for (let i = low; i < arr.length; i += 1) {
      swap(i, low);
      permutationsHelper(low + 1);
      swap(i, low);
    }
  };

  permutationsHelper();

  return res;
}
