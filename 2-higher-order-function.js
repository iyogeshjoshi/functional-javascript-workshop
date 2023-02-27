/**
 * @param {function} operation
 * @param {number} num
 * @returns void
 */
function repeat(operation, num) {
  if (num <= 0) return;
  operation();

  return repeat(operation, num - 1);
}

module.exports = repeat;
