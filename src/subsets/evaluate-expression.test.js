import evaluateExpression from './evaluate-expression';

test('Evaluate Expression', () => {
  expect(evaluateExpression('1+2*3')).toEqual([7, 9]);
  expect(evaluateExpression('2*3-4-5')).toEqual([8, -12, 7, -7, -3]);
  expect(evaluateExpression('2*3-4*5').sort()).toEqual([-34, -14, -10, -10, 10].sort());
  expect(evaluateExpression('2-1-1').sort()).toEqual([0, 2].sort());
  expect(evaluateExpression('11').sort()).toEqual([11].sort());
});
