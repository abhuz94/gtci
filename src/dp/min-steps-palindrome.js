const lcsTabOpt = (text1 = '', text2 = '') => {
  let prev = Array(text2.length + 1).fill(0);

  for (let i = 1; i <= text1.length; i += 1) {
    const curr = Array(text2.length + 1).fill(0);

    for (let j = 1; j <= text2.length; j += 1) {
      curr[j] = text1[i - 1] === text2[j - 1]
        ? 1 + prev[j - 1]
        : Math.max(prev[j], curr[j - 1]);
    }

    prev = curr;
  }

  return prev[text2.length];
};

export default function minStepsPalindrome(str) {
  let reverse = '';

  for (let i = str.length - 1; i >= 0; i -= 1) { reverse += str[i]; }

  return str.length - lcsTabOpt(str, reverse);
}
