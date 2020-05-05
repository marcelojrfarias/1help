const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(port, () => {
  console.log(`♥ Server started on port ${port}!`);
});
