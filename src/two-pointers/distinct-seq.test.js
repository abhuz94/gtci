import { distinctSeq, distinctSeqTab } from './distinct-seq';

test('Distinct Subsequences', () => {
  expect(distinctSeq('rabbbit', 'rabbit')).toEqual(3);
  expect(distinctSeq('babgbag', 'bag')).toEqual(5);

  expect(distinctSeqTab('rabbbit', 'rabbit')).toEqual(3);
  expect(distinctSeqTab('babgbag', 'bag')).toEqual(5);
});
