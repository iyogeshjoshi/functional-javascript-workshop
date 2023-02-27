/**
 * @param {object[]}} messages
 */
function getShortMessages(messages) {
  return messages
    .filter(({ message }) => message.length < 50)
    .map(({ message }) => message);
}

module.exports = getShortMessages;
