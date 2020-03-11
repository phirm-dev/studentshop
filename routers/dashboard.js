const router = require('express').Router();
const { index } = require('../controllers/dashboard');


router.route('/')
      .get(index);


module.exports = router;