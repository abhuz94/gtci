import noRepeatSubstr from './no-repeat-substr';

test('No-repeat Substring', () => {
  expect(noRepeatSubstr('aabccbb')).toEqual(3);
  expect(noRepeatSubstr('abbbb')).toEqual(2);
  expect(noRepeatSubstr('abccde')).toEqual(3);
  expect(noRepeatSubstr('abcde')).toEqual(5);
});
