import balancedParen from './balanced-paren';

test('Balanced Parentheses', () => {
  expect(balancedParen(2)).toEqual(['(())', '()()']);
  expect(balancedParen(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});
