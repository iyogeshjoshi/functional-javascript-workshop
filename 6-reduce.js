/**
 * @param {string[]} inputWords
 * @returns
 */
function countWords(inputWords) {
  return inputWords.reduce((acculumator, currentWord) => {
    acculumator[currentWord] = ++acculumator[currentWord] || 1;

    return acculumator;
  }, {});
}

module.exports = countWords;
