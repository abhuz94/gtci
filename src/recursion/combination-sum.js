export default function combinationSum(candidates = [], initialTarget = 0) {
  const combinations = [];
  const combinationSumHelper = (i = candidates.length, target = initialTarget, res = []) => {
    if (target === 0) { combinations.push([...res]); return; }
    if (i === 0) { return; }
    if (candidates[i - 1] > target) {
      combinationSumHelper(i - 1, target, res);
    } else {
      combinationSumHelper(i - 1, target, res);
      res.push(candidates[i - 1]);
      combinationSumHelper(i, target - candidates[i - 1], res);
      res.pop();
    }
  };

  combinationSumHelper();

  return combinations;
}
