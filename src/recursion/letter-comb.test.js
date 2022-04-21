import letterComb from './letter-comb';

test('Letter Combinations of a Phone Number', () => {
  expect(letterComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  expect(letterComb('')).toEqual([]);
  expect(letterComb('2')).toEqual(['a', 'b', 'c']);
  expect(letterComb('2')).toEqual(['a', 'b', 'c']);
  expect(letterComb('123')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});
