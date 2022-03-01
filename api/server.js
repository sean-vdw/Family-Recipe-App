const express = require('express');
const server = express();

server.use(express.json());
// insert API Routers

module.exports = server;