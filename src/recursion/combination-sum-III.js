export default function combinationSum(k, n) {
  const combinations = [];
  const combinationSumHelper = (low = 1, x = k, y = n, res = []) => {
    if (n === 0) { return; }
    if (x === 0) {
      if (y === 0) { combinations.push([...res]); }

      return;
    }

    for (let i = low; i <= 9; i += 1) {
      if (i <= y) {
        res.push(i);
        combinationSumHelper(i + 1, x - 1, y - i, res);
        res.pop();
      }
    }
  };

  combinationSumHelper();

  return combinations;
}
