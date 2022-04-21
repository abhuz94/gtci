export default function combinationSum(nums = [], initialTarget = 0) {
  const dp = Array(initialTarget + 1).fill(-1);
  const combinationSumHelper = (target = initialTarget) => {
    if (target === 0) { return 1; }
    if (dp[target] !== -1) { return dp[target]; }

    let count = 0;

    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] <= target) {
        count += combinationSumHelper(target - nums[i]);
      }
    }

    return (dp[target] = count);
  };

  return combinationSumHelper();
}
