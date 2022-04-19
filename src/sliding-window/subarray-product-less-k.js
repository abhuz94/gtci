// TC - O(N) SC - O(1)

export default function subarrayProductLessK(arr = [], k = 0) {
  let windowStart = 0;
  let windowEnd = 0;
  let product = 1;
  let subArraysCount = 0;

  for (; windowEnd < arr.length; windowEnd += 1) {
    product *= arr[windowEnd];

    while (product >= k) {
      product /= arr[windowStart];
      windowStart += 1;
    }

    if (windowEnd - windowStart >= 0) { subArraysCount += windowEnd - windowStart + 1; }
  }

  return subArraysCount;
}
