// TC - O(N) SC - O(1)

export default function maxSumSubarrayK(arr = [], k = 0) {
  if (k === 0) { return 0; }

  let windowStart = 0;
  let windowEnd = 0;
  let maxSumTillNow = 0;
  let maxSumHere = 0;

  for (; windowEnd < arr.length; windowEnd += 1) {
    maxSumHere += arr[windowEnd];

    if (windowEnd - windowStart + 1 > k) {
      maxSumHere -= arr[windowStart];
      windowStart += 1;
    }

    maxSumTillNow = Math.max(maxSumTillNow, maxSumHere);
  }

  return maxSumTillNow;
}
