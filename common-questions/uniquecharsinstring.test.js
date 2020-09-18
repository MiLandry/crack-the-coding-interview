const uniqueChars = require('./uniquecharsinstring');



test('abc', () => {
  expect(uniqueChars('abc')).toBeTruthy();
});

test('a', () => {
  expect(uniqueChars('a')).toBeTruthy();
});

test('aa', () => {
  expect(uniqueChars('aa')).toBeFalsy();
});

test('abca', () => {
  expect(uniqueChars('abca')).toBeFalsy();
});