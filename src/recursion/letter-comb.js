// TC - O(N.4^4) SC - O(4N)

export default function letterComb(digits = '') {
  if (digits.length === 0) { return []; }

  const phoneNumberMap = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const letterCombos = [];

  const letterCombHelper = (low = 0, str = '') => {
    if (low >= digits.length) {
      letterCombos.push(str);

      return;
    }

    const charsMap = phoneNumberMap[digits[low]];

    if (charsMap.length === 0) {
      letterCombHelper(low + 1, str);
    } else {
      for (let i = 0; i < charsMap.length; i += 1) {
        letterCombHelper(low + 1, str + charsMap[i]);
      }
    }
  };

  letterCombHelper();

  return letterCombos;
}
