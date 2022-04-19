// TC - O(N) SC - O(1)

export default function maxSumSubarray(arr = []) {
  let maxTillHere = Number.NEGATIVE_INFINITY;
  let maxTillNow = 0;

  for (let i = 0; i < arr.length; i += 1) {
    maxTillNow += arr[i];
    maxTillHere = Math.max(maxTillNow, maxTillHere);

    if (maxTillNow < 0) { maxTillNow = 0; }
  }

  return maxTillHere;
}
