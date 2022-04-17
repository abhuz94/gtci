import findSubstring from './find-substring';

test('Substring with Concatenation of All Words', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
  expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([]);
  expect(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toEqual([6, 9, 12]);
});
