import {
  lcs, lcsMemo, lcsTab, lcsTabOpt,
} from './lcs';

test('Longest Common Subsequence', () => {
  expect(lcs('abcde', 'ace')).toEqual(3);
  expect(lcs('abc', 'abc')).toEqual(3);
  expect(lcs('abc', 'def')).toEqual(0);

  expect(lcsMemo('abcde', 'ace')).toEqual(3);
  expect(lcsMemo('abc', 'abc')).toEqual(3);
  expect(lcsMemo('abc', 'def')).toEqual(0);

  expect(lcsTab('abcde', 'ace')).toEqual(3);
  expect(lcsTab('abc', 'abc')).toEqual(3);
  expect(lcsTab('abc', 'def')).toEqual(0);

  expect(lcsTabOpt('abcde', 'ace')).toEqual(3);
  expect(lcsTabOpt('abc', 'abc')).toEqual(3);
  expect(lcsTabOpt('abc', 'def')).toEqual(0);
});
