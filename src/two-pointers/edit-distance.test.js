import editDistance from './edit-distance';

test('Edit Distance', () => {
  expect(editDistance('horse', 'ros')).toEqual(3);
  expect(editDistance('intention', 'execution')).toEqual(5);
});
