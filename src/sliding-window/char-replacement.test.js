import charReplacment from './char-replacement';

test('Longest Repeating Character Replacement', () => {
  expect(charReplacment('ABAB', 2)).toEqual(4);
  expect(charReplacment('AABABBA', 1)).toEqual(4);
});
