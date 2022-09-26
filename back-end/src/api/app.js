const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const routers = require('../routers');

app.use(bodyParser.json());
app.use(cors());
app.use('/users', routers.Users);

module.exports = app;