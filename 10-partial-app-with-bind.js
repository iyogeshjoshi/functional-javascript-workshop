/**
 * @param {string} namespace
 * @returns function
 */
function logger(namespace) {
  return console.log.bind(null, namespace);
}

module.exports = logger;
