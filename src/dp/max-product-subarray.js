/* eslint-disable no-restricted-syntax */
export default function maxProductSubArray(nums = []) {
  let currMax = 1;
  let currMin = 1;
  let res = Math.max(...nums);

  for (const num of nums) {
    const tempCurrMax = currMax;
    currMax = Math.max(currMax * num, currMin * num, num);
    currMin = Math.min(tempCurrMax * num, currMin * num, num);
    res = Math.max(res, currMax);
  }

  return res;
}
