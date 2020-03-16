const router = require('express').Router();
const { getItem, getItemById, deleteItem } = require('../controllers/item_api');

router.route('/')
      .get(getItem)

// router.route('/upload/:id')
//       .post(uploadPictures);

router.route('/:id')
      .get(getItemById)
      .delete(deleteItem);

module.exports = router;
