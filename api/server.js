const express = require('express');
const server = express();
const cors = require('cors');

const usersRouter = require('./users/users-router');

server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = server;