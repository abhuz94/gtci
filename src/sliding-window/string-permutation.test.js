import stringPermutation from './string-permutation';

test('Permutation in String', () => {
  expect(stringPermutation('ab', 'eidbaooo')).toBeTruthy();
  expect(stringPermutation('ab', 'eidboaoo')).toBeFalsy();
});
