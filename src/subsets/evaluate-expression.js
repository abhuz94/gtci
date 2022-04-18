// TC - O(N * 2^N) SC - O(2^N)

/* eslint-disable no-restricted-syntax */
export default function evaluateExpression(expr = '') {
  const compute = (operand1, operand2, operator) => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        throw new Error('unknown operator');
    }
  };
  const operators = new Set(['+', '-', '*', '/']);
  const evaluateExpressionHelper = (low = 0, high = expr.length - 1) => {
    if (low > high) { return []; }

    const res = [];

    for (let i = low; i < high; i += 1) {
      if (operators.has(expr[i])) {
        const lhs = evaluateExpressionHelper(low, i - 1);
        const rhs = evaluateExpressionHelper(i + 1, high);

        for (const l of lhs) {
          for (const r of rhs) {
            res.push(compute(+l, +r, expr[i]));
          }
        }
      }
    }

    if (!res.length) { res.push(+expr.substring(low, high + 1)); }

    return res;
  };

  return evaluateExpressionHelper();
}
