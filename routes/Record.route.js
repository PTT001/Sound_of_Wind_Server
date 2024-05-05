const express = require('express');
const router = express.Router();
const { createRecord } = require('../controllers/Record.controller.js');

router.post('/', createRecord);

module.exports = router;
