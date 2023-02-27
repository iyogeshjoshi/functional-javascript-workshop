/**
 * @param {array} arr
 * @param {function} fn
 * @returns array
 */
module.exports = (arr, fn, thisArg = null) =>
  arr.reduce(
    (acc, currentItem, index) => [
      ...acc,
      fn.apply(thisArg, [currentItem, index]),
    ],
    []
  );
