const router = require('express').Router();
const { login, signup, register, authenticate } = require('../controllers/auth');

router.route('/login')
  .get(login)
  .post(authenticate)

router.route('/signup')
  .get(signup)
  .post(register)

module.exports = router;