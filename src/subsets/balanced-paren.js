// TC - O(2^N) SC - O(1)

export default function balancedParen(n = 0) {
  const res = [];
  // eslint-disable-next-line consistent-return
  const balancedParenHelper = (op = n, cp = n, paren = '') => {
    if (op === 0 && cp === 0) { return res.push(paren); }
    if (op === cp) { return balancedParenHelper(op - 1, cp, `${paren}(`); }
    if (op > 0) { balancedParenHelper(op - 1, cp, `${paren}(`); }

    balancedParenHelper(op, cp - 1, `${paren})`);
  };

  balancedParenHelper();

  return res;
}
