const express = require('express');
const Users = require('../controllers/Users');

const router = express.Router();

router.get('/', Users.getAll);


module.exports = router;
