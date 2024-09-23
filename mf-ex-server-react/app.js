const express = require('express');
const data = require('./data.json');
const dataBest = require('./data_best.json');

const app = express();
const port = 5005;

app.get('/api/react', (_req, res) => {
  res.json(data);
});

app.get('/api/react/best', (_req, res) => {
  const best = dataBest.map(({ id, ...other }) => ({ ...other, ...data.find((i) => i.id === id) }));

  res.json(best);
});

app.listen(port, () => {
  console.log(`be-react app listening at http://localhost:${port}`);
});

module.exports = app; // for testing
