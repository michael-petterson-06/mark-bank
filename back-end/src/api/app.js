const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const routers = require('../routers');
const erroMiddlewares = require('../middlewares/error/error');


app.use(bodyParser.json());
app.use(cors());


app.use('/login', routers.Login);
app.use('/users', routers.Users);
app.use(erroMiddlewares);

module.exports = app;