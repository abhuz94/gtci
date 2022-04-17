// TC - O(N) SC - O(k)

export default function stringPermutation(pattern = '', str = '') {
  if (str.length < pattern.length) { return false; }

  const charMap = new Map();
  const k = pattern.length;
  let charCount = 0;
  let windowStart = 0;
  let windowEnd = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const char of pattern) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (; windowEnd < str.length; windowEnd += 1) {
    const char = str[windowEnd];

    if (charMap.has(char)) {
      if (charMap.get(char) > 0) { charCount += 1; }

      charMap.set(char, charMap.get(char) - 1);
    }

    if (windowEnd - windowStart + 1 === k) {
      if (charCount === k) { return true; }

      const staleChar = str[windowStart];

      if (charMap.has(staleChar)) {
        charMap.set(staleChar, charMap.get(staleChar) + 1);

        if (charMap.get(staleChar) > 0) { charCount -= 1; }
      }

      windowStart += 1;
    }
  }

  return false;
}
