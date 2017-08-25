const urlify = require('./urlify');

test('with space', () => {
  expect(urlify.urlify('oh hi there')).toEqual('oh%20hi%20there');
});

test('without space', () => {
  expect(urlify.urlify('aaaaa')).toEqual('aaaaa');
});
