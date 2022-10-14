const express = require('express');
const Users = require('../controllers/Users');

const token = require('../middlewares/token/authToken');
const validateUser = require('../middlewares/validation/validateUser');
const verifyUser = require('../middlewares/verification/verifyUser');

const router = express.Router();

router.post('/',token, validateUser, verifyUser, Users.createUser);
router.get('/', Users.getAll);
router.get('/:id', token, Users.getById);
router.patch('/:id', token, validateUser, Users.editUser);
router.delete('/:id', token, Users.deleteUser);

module.exports = router;
