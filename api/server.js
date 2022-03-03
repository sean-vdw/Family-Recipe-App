const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const usersRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const restricted = require('./middleware/restricted');

server.use(express.static(path.join(__dirname, '../client')));
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src', 'index.js'));
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = server;