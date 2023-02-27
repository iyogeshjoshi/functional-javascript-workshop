/**
 * @param {any} operation
 * @param {number} num
 * @returns promise
 */
async function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
}

module.exports = repeat;
