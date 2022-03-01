const router = require('express').Router();
const Users = require('./users-model');

// [GET] all users
router.get('/', (req, res, next) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(next);
});

// [POST] new user
router.post('/', (req, res, next) => {
  const newUser = req.body;
  Users.createUser(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(next);
});

module.exports = router;