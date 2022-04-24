import scs from './scs';

test('Shortest Common Supersequence', () => {
  expect(scs('abac', 'cab')).toEqual('cabac');
  expect(scs('aaaaaaaa', 'aaaaaaaa')).toEqual('aaaaaaaa');
});
