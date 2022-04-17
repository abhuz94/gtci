import allAnagramsInString from './all-anagrams-in-string';

test('Find All Anagrams in a String', () => {
  expect(allAnagramsInString('cbaebabacd', 'abc')).toEqual([0, 6]);
  expect(allAnagramsInString('abab', 'ab')).toEqual([0, 1, 2]);
});
