const express = require('express');
const cors = require('cors');

const app = express();
const taskroute = require('./taskRoute');

app.use(cors());
app.use(express.json());

app.use('/', taskroute);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});