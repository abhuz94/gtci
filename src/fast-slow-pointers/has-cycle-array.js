// TC - O(N^2) SC - O(1)
// TC - O(N) SC - O(N)

export default function hasCycleArray(arr = []) {
  const INF = Number.POSITIVE_INFINITY;
  const dp = Array(arr.length).fill(INF);
  const getNextIndex = (currIndex, isForward) => {
    if (dp[currIndex] !== INF) { return dp[currIndex]; }
    const nextIndex = (currIndex + Math.abs(arr[currIndex] + arr.length)) % arr.length;
    const isNextForward = arr[nextIndex] > 0;

    // eslint-disable-next-line no-nested-ternary
    dp[currIndex] = isForward !== isNextForward
      ? -1
      : currIndex === nextIndex ? -1 : nextIndex;

    return dp[currIndex];
  };

  for (let i = 0; i < arr.length; i += 1) {
    const isForward = arr[i] > 0;
    let slow = i;
    let fast = i;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      slow = getNextIndex(slow, isForward);

      if (slow === -1) { break; }

      fast = getNextIndex(fast, isForward);

      if (fast === -1) { break; }

      fast = getNextIndex(fast, isForward);

      if (fast === -1) { break; }
      if (slow === fast) { return true; }
    }
  }

  return false;
}
