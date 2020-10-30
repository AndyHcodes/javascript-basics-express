const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, multiply, divide, subtract } = require('./lib/numbers');

const { negate } = require('./lib/booleans');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200);
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200);
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200);
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200);
  let result;
  if (req.query.length) {
    result = firstCharacters(req.params.string, req.query.length);
  } else {
    result = firstCharacter(req.params.string);
  }
  // console.log(req.query.length);
  res.send({
    result,
  });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200);
  console.log(req.query.length);
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  console.log(req.params);
  res.status(200);
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.sendStatus(400);
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  res.status(200);
  res.json({ result: multiply(req.body.a, req.body.b) });
});

app.post('/numbers/divide', (req, res) => {
  res.status(200);
  res.json({ result: divide(req.body.a, req.body.b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  console.log(req.params);
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  res.status(200).json({ result: subtract(b, a) });
});

app.post('/booleans/negate', (req, res) => {
  console.log(req.body);
  res.status(200).json({ result: negate(req.body.a) });
});

module.exports = app;
