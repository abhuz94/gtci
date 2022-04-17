// TC - O(N) SC - O(1)

export default function maxConsecutiveOnes(arr = [], k = 0) {
  let maxOnesCount = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let maxLen = 0;

  for (; windowEnd < arr.length; windowEnd += 1) {
    if (arr[windowEnd] === 1) { maxOnesCount += 1; }

    while (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) { maxOnesCount -= 1; }

      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}
