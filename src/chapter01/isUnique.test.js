const isUnique = require('./isUnique');

test('empty string returns false', () => {
  expect(isUnique.isStringUnique('')).toBeFalsy();
});

test('unique characters in string return truthy', () => {
  expect(isUnique.isStringUnique('abcdefg')).toBeTruthy();
});

test('dupe characters in string return falsy', () => {
  expect(isUnique.isStringUnique('gfedcbaaa')).toBeFalsy();
});

test('should be case sensitive', () => {
  expect(isUnique.isStringUnique('abcABC')).toBeTruthy();
});
