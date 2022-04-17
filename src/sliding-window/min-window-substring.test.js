import minWindowSubstring from './min-window-substring';

test('Minimum Window Substring', () => {
  expect(minWindowSubstring('ADOBECODEBANC', 'ABC')).toEqual('BANC');
  expect(minWindowSubstring('a', 'a')).toEqual('a');
  expect(minWindowSubstring('a', 'aa')).toEqual('');
});
