import generateTrees from './generate-trees';

test('Structurally Unique Binary Search Trees', () => {
  expect(generateTrees(3).length).toEqual(5);
});
