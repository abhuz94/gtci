import wildCard from './wild-card';

test('Wildcard Matching', () => {
  expect(wildCard('aa', 'a')).toBeFalsy();
  expect(wildCard('cb', '?b')).toBeTruthy();
  expect(wildCard('aa', '*')).toBeTruthy();
  expect(wildCard('aaslkjdslkjlkfjsdlkfjdlsc', 'a************c')).toBeTruthy();
  expect(wildCard('baaabab', '*****ba*****ab')).toBeTruthy();
  expect(wildCard('baaabab', 'baaa?ab')).toBeTruthy();
  expect(wildCard('baaabab', 'ba*a?')).toBeTruthy();
  expect(wildCard('baaabab', 'a*ab')).toBeFalsy();
});
