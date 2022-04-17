import {
  fib, fibMemo, fibTab, fibOpt,
} from './fib';

test('Fibonacci Number', () => {
  expect(fib(3)).toEqual(2);
  expect(fibMemo(3)).toEqual(2);
  expect(fibTab(3)).toEqual(2);
  expect(fibOpt(3)).toEqual(2);
});
