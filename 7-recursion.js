/**
 * @param {array} arr
 * @param {function} fn
 * @param {object} initial
 */
function reduce(arr, func, initial) {
  let data = initial;

  arr.forEach((item, index) => {
    let returnValue = func(data, item, index, arr);

    data = { ...data, ...returnValue };
  });

  return data;
}

module.exports = reduce;
