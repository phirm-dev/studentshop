const router = require('express').Router();
const { index, products, bid, submitBid, createItem } = require('../controllers/pages');

router.route('/')
  .get(index)

router.route('/item/:id')
  .post(createItem)

router.route('/product/:id')
  .get(products)

router.route('/bid/:itemId')
  .get(bid)
  .post(submitBid);

module.exports = router;