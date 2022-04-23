import rainWaterTrapping from './rain-water-trapping';

test('Trapping Rain Water', () => {
  expect(rainWaterTrapping([4, 2, 0, 3, 2, 5])).toEqual(9);
  expect(rainWaterTrapping([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
});
