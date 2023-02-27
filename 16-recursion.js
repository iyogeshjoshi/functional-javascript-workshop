/**
 * @param {object} tree
 * @param {array}  result
 */
function getDependencies(tree, result = []) {
  let dependencies = tree?.dependencies || [];

  Object.keys(dependencies).forEach((dependency) => {
    const module = `${dependency}@${dependencies[dependency].version}`;

    if (!result.includes(module)) {
      result.push(module);
    }

    getDependencies(dependencies[dependency], result);
  });

  return result.sort();
}

module.exports = getDependencies;
