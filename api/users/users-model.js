const db = require('../data/db-config');

const getUsers = () => {
  return db('users');
};

const createUser = (createdUser) => {
  return db('users').insert(createdUser).returning('*')
    .then(([user]) => user)
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getUsers,
  createUser
}