import nextLetter from './next-letter';

test('Next Letter', () => {
  expect(nextLetter(['a', 'c', 'f', 'h'], 'f')).toEqual('h');
  expect(nextLetter(['a', 'c', 'f', 'h'], 'b')).toEqual('c');
  expect(nextLetter(['a', 'c', 'f', 'h'], 'm')).toEqual('a');
  expect(nextLetter(['a', 'c', 'f', 'h'], 'h')).toEqual('a');
});
