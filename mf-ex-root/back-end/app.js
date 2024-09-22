const express = require('express');
const data = require('./data.json');

const app = express();
const port = 8082;

app.get('/api/user', (_req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});

module.exports = app; // for testing
