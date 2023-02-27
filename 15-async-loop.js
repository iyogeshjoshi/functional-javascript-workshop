/**
 * @param {number[]} userIds
 * @param {function} load
 * @param {function} done
 */
function loadUsers(userIds, load, done) {
  var users = [];

  userIds.forEach((id, index) => {
    load(id, (user) => {
      users.push(user);
      if (index === userIds.length - 1) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
