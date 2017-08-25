/**
 * Check that a string is unique
 * @param {any} string
 * @returns {bool}
 */
exports.isStringUnique = (string) => {
  if (!string || !string.length) {
    return false;
  }

  // Add characters to an Object with the key of the character and the count of its occurances
  const count = array =>
    array.reduce((a, b) => Object.assign(a, { [b]: (a[b] || 0) + 1 }), {});

  // Traverse the dictionary to find occurances of keys greater than 1
  const duplicates = dict =>
    Object.keys(dict).filter(a => dict[a] > 1);

  const stringArray = string.split('');
  const dupeChars = duplicates(count(stringArray));

  // If we have items in this array then there are duplicates
  return dupeChars.length === 0;
};
