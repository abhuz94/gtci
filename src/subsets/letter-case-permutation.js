// TC - O(N.2^N) SC - O(1)

const isNumber = (c) => !Number.isNaN(+c);
const toggleCase = (c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase());

export default function letterCasePermutation(initialString = '') {
  const permutations = [];
  const str = initialString.split('');
  // eslint-disable-next-line consistent-return
  const letterCasePermutationHelper = (i = str.length - 1) => {
    if (i < 0) { return permutations.push(str.join('')); }
    if (isNumber(str[i])) { return letterCasePermutationHelper(i - 1); }

    str[i] = toggleCase(str[i]);

    letterCasePermutationHelper(i - 1);

    str[i] = toggleCase(str[i]);

    letterCasePermutationHelper(i - 1);
  };

  letterCasePermutationHelper();

  return permutations;
}
