import houseRobber from './house-robber-II';

test('House Robber', () => {
  expect(houseRobber([2, 3, 2])).toEqual(3);
  expect(houseRobber([1, 2, 3, 1])).toEqual(4);
  expect(houseRobber([1, 2, 3])).toEqual(3);
});
