/**
 * @param {function} operation
 * @param {number} num
 * @returns function | any
 */
function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  return () => {
    operation();
    return repeat(operation, --num);
  };
}

/**
 * @param {function|any} fn
 */
function trampoline(fn) {
  while (fn && typeof fn === "function") {
    fn = fn();
  }
}

/**
 * @param {function} operation
 * @param {number} num
 */
module.exports = function (operation, num) {
  trampoline(function () {
    return repeat(operation, num);
  });
};
