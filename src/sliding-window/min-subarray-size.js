// TC - O(N) SC - O(1)

export default function minSubarraySize(arr = [], target = 0) {
  let windowStart = 0;
  let windowEnd = 0;
  let sum = 0;
  let minLen = Number.POSITIVE_INFINITY;

  for (; windowEnd < arr.length; windowEnd += 1) {
    sum += arr[windowEnd];

    while (sum >= target) {
      minLen = Math.min(minLen, windowEnd - windowStart + 1);
      sum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return minLen === Number.POSITIVE_INFINITY ? 0 : minLen;
}
