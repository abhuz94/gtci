export default function combinationSum(candidates = [], initialTarget = 0) {
  candidates.sort((a, b) => a - b);

  const combinations = [];
  const combinationSumHelper = (i = 0, target = initialTarget, res = []) => {
    if (target === 0) { combinations.push([...res]); return; }
    if (i === candidates.length || target < 0) { return; }

    for (let j = i; j < candidates.length; j += 1) {
      // eslint-disable-next-line no-continue
      if (i !== j && candidates[j] === candidates[j - 1]) { continue; }
      if (candidates[j] <= target) {
        res.push(candidates[j]);
        combinationSumHelper(j + 1, target - candidates[j], res);
        res.pop();
      }
    }
  };

  combinationSumHelper();

  return combinations;
}
