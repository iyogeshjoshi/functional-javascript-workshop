/**
 * @param  {...any} args
 * @returns number
 */
function duckCount(...args) {
  return args.filter(
    (argument) =>
      Object.keys(argument).includes("quack") && argument.quack !== "undefined"
  ).length;
}

module.exports = duckCount;
