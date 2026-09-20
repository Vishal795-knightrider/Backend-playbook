const express = require('express');
const app = express();
const apiRoutes = require('./apiRoutes');

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(8000, () => {
  console.log("server okk");
});