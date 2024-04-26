const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
  Role: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  Task: {
    type: String,
    required: true,
  },
  skill: {
    type: Object,
    required: true,
  },
});

const RoleData = mongoose.model('RoleData', RoleSchema);

module.exports = RoleData;
