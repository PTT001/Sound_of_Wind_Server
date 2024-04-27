const express = require('express');
const router = express.Router();
const {
  getAllusers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/profile.controller.js');

router.post('/', createUser);
router.get('/', getAllusers);
router.put('/', updateUser);
router.delete('/:Role', deleteUser);

module.exports = router;
