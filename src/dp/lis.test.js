import {
  lis, lisMemo, lisTab, lisTabOpt,
} from './lis';

test('Longest Increasing Subsequence', () => {
  expect(lis([0, 3, 1, 6, 2, 2, 7])).toEqual(4);
  expect(lis([0, 1, 0, 3, 2, 3])).toEqual(4);
  expect(lis([1, 3, 6, 7, 9, 4, 10, 5, 6])).toEqual(6);

  expect(lisMemo([0, 3, 1, 6, 2, 2, 7])).toEqual(4);
  expect(lisMemo([0, 1, 0, 3, 2, 3])).toEqual(4);
  expect(lisMemo([1, 3, 6, 7, 9, 4, 10, 5, 6])).toEqual(6);

  expect(lisTab([0, 3, 1, 6, 2, 2, 7])).toEqual(4);
  expect(lisTab([0, 1, 0, 3, 2, 3])).toEqual(4);
  expect(lisTab([1, 3, 6, 7, 9, 4, 10, 5, 6])).toEqual(6);

  //   expect(lisTabOpt([0, 3, 1, 6, 2, 2, 7])).toEqual(4);
  //   expect(lisTabOpt([0, 1, 0, 3, 2, 3])).toEqual(4);
  //   expect(lisTabOpt([1, 3, 6, 7, 9, 4, 10, 5, 6])).toEqual(6);
  expect(lisTabOpt([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12])).toEqual(6);
});
