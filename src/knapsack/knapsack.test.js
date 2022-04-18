import {
  knapsack, knapsackMemo, knapsackTab, knapsackTabOpt, knapsackTabOpt2,
} from './knapsack';

test('0/1 Knapsack', () => {
  const weights = [2, 3, 1, 4];
  const profits = [4, 5, 3, 7];
  const capacity = 5;

  expect(knapsack(weights, profits, capacity)).toEqual(10);
  expect(knapsackMemo(weights, profits, capacity)).toEqual(10);
  expect(knapsackTab(weights, profits, capacity)).toEqual(10);
  expect(knapsackTabOpt(weights, profits, capacity)).toEqual(10);
  expect(knapsackTabOpt2(weights, profits, capacity)).toEqual(10);
});
