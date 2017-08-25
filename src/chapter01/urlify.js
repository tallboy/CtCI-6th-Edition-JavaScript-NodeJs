exports.urlify = (string) => {
  let urlString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      urlString += '%20';
    } else {
      urlString += string[i];
    }
  }

  return urlString;
};
