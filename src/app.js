const express = require('express');
const { sayHello } = require('./strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.send(200);
  res.json({ result: sayHello(req.params.string) });
});

module.exports = app;
