import { cherryPick, cherryPickTab } from './cherry-pick-II';

test('Cherry Pickup II', () => {
  const grid = [
    [1, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 0, 0, 3, 0],
    [2, 0, 9, 0, 0, 0, 0],
    [0, 3, 0, 5, 4, 0, 0],
    [1, 0, 2, 3, 0, 0, 6],
  ];
  expect(cherryPick([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]])).toEqual(24);
  expect(cherryPick(grid)).toEqual(28);

  expect(cherryPickTab([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]])).toEqual(24);
  expect(cherryPickTab(grid)).toEqual(28);
});
