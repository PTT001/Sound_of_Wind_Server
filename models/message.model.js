const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const message = mongoose.model('message', messageSchema);

module.exports = message;
