import triangle from './triangle';

test('Triangle', () => {
  expect(triangle([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toEqual(11);
  expect(triangle([[-10]])).toEqual(-10);
});
