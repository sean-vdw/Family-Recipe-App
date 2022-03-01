const db = require('../data/db-config');

const getUsers = () => {
  return db('users');
};

const createUser = (user) => {
  return db('users').insert(user)
    .then(([user_id]) => {
      return db('users').where('user_id', user_id).first();
    });
};

module.exports = {
  getUsers,
  createUser
}