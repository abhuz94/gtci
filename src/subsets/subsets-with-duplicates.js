// TC - O(2^N) SC - O(1)

export default function subsetsWithDuplicates(arr = []) {
  arr.sort((a, b) => a - b);

  const res = [[]];
  let lastIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const isDuplicate = i > 0 && arr[i] === arr[i - 1];
    const len = res.length;

    for (let j = isDuplicate ? lastIndex : 0; j < len; j += 1) {
      res.push([...res[j], arr[i]]);
    }

    lastIndex = len;
  }

  return res;
}
