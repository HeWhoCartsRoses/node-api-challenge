const express = require("express");
const project = require('../routes/projectRouter')
const actions = require('../routes/actionRouter')
const mid = require('../middle/middle')
const server = express();
server.use(express.json());
server.use('/projects', project);
server.use('/actions', actions);
server.get("/", mid.logger, (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
});
module.exports = server;