const express = require('express');
const Users = require('../controllers/Users');

const token = require('../middlewares/token/authToken');
const validateUser = require('../middlewares/validation/validateUser');

const router = express.Router();

router.post('/',token);
router.post('/',token, validateUser);
router.get('/', Users.getAll);


module.exports = router;
