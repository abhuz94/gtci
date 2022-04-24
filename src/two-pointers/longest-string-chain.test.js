import longestStringChain from './longest-string-chain';

test('Longest String Chain', () => {
  expect(longestStringChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])).toEqual(4);
  expect(longestStringChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])).toEqual(5);
  expect(longestStringChain(['abcd', 'dbqca'])).toEqual(1);
});
