module.exports = function (target, method) {
  let spy = {
    count: 0,
  };
  const orig = target[method];

  target[method] = function () {
    spy.count++;
    return orig.apply(this, arguments);
  };

  return spy;
};
