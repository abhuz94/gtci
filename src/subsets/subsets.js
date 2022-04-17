// TC - O(2^N) SC - O(1)

export default function subsets(arr = []) {
  const res = [[]];

  for (let i = 0; i < arr.length; i += 1) {
    const len = res.length;

    for (let j = 0; j < len; j += 1) {
      res.push([...res[j], arr[i]]);
    }
  }

  return res;
}
