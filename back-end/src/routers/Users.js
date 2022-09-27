const express = require('express');
const Users = require('../controllers/Users');

const token = require('../middlewares/token/authToken');

const router = express.Router();


router.post('/',token);
router.get('/', Users.getAll);


module.exports = router;
