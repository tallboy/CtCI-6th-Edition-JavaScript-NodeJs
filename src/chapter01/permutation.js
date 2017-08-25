/**
 * Check if strings are permutations of each other
 * @param {any} string
 * @param {any} string
 * @returns {bool}
 */
exports.isPermutation = (stringA, stringB) => {
  if (!stringA || !stringB || stringA.length !== stringB.length) {
    return false;
  }

  const charsMap = new Map();

  for (let i = 0; i < stringA.length; i += 1) {
    charsMap.set(stringA[i], charsMap.get(stringA[i]) + 1 || 1);
  }

  for (let i = 0; i < stringB.length; i += 1) {
    const count = charsMap.get(stringB[i]);

    if (!count) {
      return false;
    }

    if (count > 1) {
      charsMap.set(stringB[i], count - 1);
    }

    if (count === 1) {
      charsMap.delete(stringB[i]);
    }
  }

  return charsMap.size === 0;
};
