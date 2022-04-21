import {
  houseRobber, houseRobberMemo, houseRobberTab, houseRobberTabOpt,
} from './house-robber';

test('House Robber', () => {
  expect(houseRobber([1, 2, 3, 1])).toEqual(4);
  expect(houseRobber([2, 7, 9, 3, 1])).toEqual(12);
  expect(houseRobber([1, 2])).toEqual(2);

  expect(houseRobberMemo([1, 2, 3, 1])).toEqual(4);
  expect(houseRobberMemo([2, 7, 9, 3, 1])).toEqual(12);

  expect(houseRobberTab([1, 2, 3, 1])).toEqual(4);
  expect(houseRobberTab([2, 7, 9, 3, 1])).toEqual(12);

  expect(houseRobberTabOpt([1, 2, 3, 1])).toEqual(4);
  expect(houseRobberTabOpt([2, 7, 9, 3, 1])).toEqual(12);
});
