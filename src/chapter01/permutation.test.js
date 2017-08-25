const permutation = require('./permutation');

test('truthy perm', () => {
  expect(permutation.isPermutation('zerg', 'grez')).toBeTruthy();
});

test('falsy perm', () => {
  expect(permutation.isPermutation('aaaaa', 'aaaab')).toBeFalsy();
});

test('length of strings', () => {
  expect(permutation.isPermutation('aaa', 'aaaaa')).toBeFalsy();
});
