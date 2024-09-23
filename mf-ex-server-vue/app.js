const express = require('express');
const data = require('./data.json');

const app = express();
const port = 5555;

app.get('/api/vue', (_req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`be-vue app listening at http://localhost:${port}`);
});

module.exports = app; // for testing
