// TC - O(N) SC - O(1)

export default function fruitsIntoBaskets(fruits = []) {
  const baskets = new Map();
  const k = 2;
  let maxFruits = 0;
  let windowStart = 0;
  let windowEnd = 0;

  for (; windowEnd < fruits.length; windowEnd += 1) {
    const fruit = fruits[windowEnd];

    baskets.set(fruit, (baskets.get(fruit) || 0) + 1);

    while (baskets.size > k) {
      const staleFruit = fruits[windowStart];

      baskets.set(staleFruit, baskets.get(staleFruit) - 1);

      if (baskets.get(staleFruit) === 0) { baskets.delete(staleFruit); }

      windowStart += 1;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
}
