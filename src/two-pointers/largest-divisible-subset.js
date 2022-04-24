export default function largestDivisibleSubset(nums = []) {
  nums.sort((a, b) => a - b);

  const divisibleSubsetCount = Array(nums.length).fill(1);
  const divisibleSubsetIndices = Array(nums.length).fill(0).map((_, i) => i);
  let maxIndex = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] % nums[j] === 0 && divisibleSubsetCount[i] < 1 + divisibleSubsetCount[j]) {
        divisibleSubsetCount[i] = 1 + divisibleSubsetCount[j];
        divisibleSubsetIndices[i] = j;

        if (maxCount < divisibleSubsetCount[i]) {
          maxIndex = i;
          maxCount = divisibleSubsetCount[i];
        }
      }
    }
  }

  const divisibleSubsets = [nums[maxIndex]];

  while (maxIndex !== divisibleSubsetIndices[maxIndex]) {
    maxIndex = divisibleSubsetIndices[maxIndex];

    divisibleSubsets.push(nums[maxIndex]);
  }

  return divisibleSubsets;
}
