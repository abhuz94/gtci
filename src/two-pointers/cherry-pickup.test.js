import cherryPickup from './cherry-pickup';

test('Cherry Pickup', () => {
  expect(cherryPickup([[0, 1, -1], [1, 0, -1], [1, 1, 1]])).toEqual(5);
  expect(cherryPickup([[1, 1, -1], [1, -1, 1], [-1, 1, 1]])).toEqual(0);
});
