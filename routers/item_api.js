const router = require('express').Router();
const { createItem, getItem, getItemById, deleteItem } = require('../controllers/item_api');

router.route('/')
      .get(getItem)
      .post(createItem);

router.route('/:id')
      .get(getItemById)
      .delete(deleteItem);

module.exports = router;
