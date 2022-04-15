// TC - O(logn) SC - O(1)

export default function isHappyNumber(num) {
  const getNextHappyNumber = (n) => {
    if (n === 0) { return n; }

    // eslint-disable-next-line no-bitwise
    return (n % 10) ** 2 + getNextHappyNumber((n / 10) >> 0);
  };

  let slow = num;
  let fast = num;

  do {
    slow = getNextHappyNumber(slow);
    fast = getNextHappyNumber(getNextHappyNumber(fast));

    if (fast === 1) { return true; }
  } while (slow !== fast);

  return false;
}
