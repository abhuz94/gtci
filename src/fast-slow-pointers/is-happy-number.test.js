import isHappyNumber from './is-happy-number';

test('Happy Number', () => {
  expect(isHappyNumber(23)).toBeTruthy();
  expect(isHappyNumber(12)).toBeFalsy();
});
