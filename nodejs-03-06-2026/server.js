const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('hello the server is running');
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port http://localhost:8080`);
});
