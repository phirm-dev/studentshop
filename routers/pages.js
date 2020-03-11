const router = require('express').Router();
const { index, products, bid, submitBid } = require('../controllers/pages');

router.route('/')
  .get(index)

router.route('/product/:id')
  .get(products)

router.route('/bid/:itemId')
  .get(bid)
  .post(submitBid);

module.exports = router;