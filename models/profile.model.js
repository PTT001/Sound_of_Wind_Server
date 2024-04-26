const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
});

const profile = mongoose.model('profile', profileSchema);

module.exports = profile;
