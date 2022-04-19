import backspaceStringCompare from './backspace-string-compare';

test('Backspace String Compare', () => {
  expect(backspaceStringCompare('ab#c', 'ad#c')).toBeTruthy();
  expect(backspaceStringCompare('ab##', 'c#d#')).toBeTruthy();
  expect(backspaceStringCompare('a#c', 'b')).toBeFalsy();
  expect(backspaceStringCompare('bxj##tw', 'bxo#j##tw')).toBeTruthy();
  expect(backspaceStringCompare('bbbextm', 'bbb#extm')).toBeFalsy();
});
