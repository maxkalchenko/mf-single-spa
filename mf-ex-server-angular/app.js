const express = require('express');
const data = require('./data.json');

const app = express();
const port = 5055;

app.get('/api/angular', (_req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`be-angular app listening at http://localhost:${port}`);
});

module.exports = app; // for testing
