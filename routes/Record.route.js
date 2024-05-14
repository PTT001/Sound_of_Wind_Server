const express = require('express');
const router = express.Router();
const {
  createRecord,
  getAllRecord,
} = require('../controllers/Record.controller.js');

router.post('/', createRecord);
router.get('/', getAllRecord);

module.exports = router;
