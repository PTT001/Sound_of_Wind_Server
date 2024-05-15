const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema(
  {
    Win: {
      type: String,
      required: true,
    },
    Red: {
      type: Array,
      required: true,
    },
    Blue: {
      type: Array,
      required: true,
    },
    Green: {
      type: Array,
    },
  },
  { timestamps: true }
);

const RecordData = mongoose.model('RecordData', RecordSchema);

module.exports = RecordData;
