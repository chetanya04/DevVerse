const { signup, login,getUserDetails } = require('../controllers/AuthController');
const { signupValidation, loginValidation} = require('../config/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.get('/me', getUserDetails);

module.exports = router;
