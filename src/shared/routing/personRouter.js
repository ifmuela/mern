// const router = require('express-promise-router')()
const express = require('express');
const router = express.Router();

const {
  index,
  add,
  getOne,
  update,
  remove
} = require('../../server/api/controllers/personController');

router.get('/', index);
router.get('/:id', getOne);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
