import minStepsPalindrome from './min-steps-palindrome';

test('Minimum Insertion Steps to Make a String Palindrome', () => {
  expect(minStepsPalindrome('zzazz')).toEqual(0);
  expect(minStepsPalindrome('mbadm')).toEqual(2);
  expect(minStepsPalindrome('leetcode')).toEqual(5);
});
