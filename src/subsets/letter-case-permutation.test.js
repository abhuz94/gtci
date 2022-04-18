import letterCasePermutation from './letter-case-permutation';

test('Letter Case Permutation', () => {
  expect(letterCasePermutation('a1b2').sort()).toEqual(['a1b2', 'a1B2', 'A1b2', 'A1B2'].sort());
});
