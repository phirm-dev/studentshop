const router = require('express').Router();
const { getUserProfile } = require('../controllers/user_api');

router.route('/profile')
      .get(getUserProfile)

module.exports = router;