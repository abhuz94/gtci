import kDistinctCharsLongestSubstr from './k-distinct-chars-longest-substr';

test('Longest Substring with K Distinct Characters', () => {
  expect(kDistinctCharsLongestSubstr('araaci', 2)).toEqual(4);
  expect(kDistinctCharsLongestSubstr('araaci', 1)).toEqual(2);
  expect(kDistinctCharsLongestSubstr('cbbebi', 3)).toEqual(5);
});
