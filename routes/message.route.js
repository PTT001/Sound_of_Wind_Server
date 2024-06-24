const express = require('express');
const router = express.Router();
const {
  createmessage,
  getAllmessage,
} = require('../controllers/message.controller.js');

router.post('/', createmessage);
router.get('/', getAllmessage);

module.exports = router;
