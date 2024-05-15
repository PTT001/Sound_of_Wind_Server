const Record = require('../models/Record.model');

const createRecord = async (req, res) => {
  try {
    const Record2 = await Record.create(req.body);
    res.status(200).send(Record2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllRecord = async (req, res) => {
  try {
    const Record2 = await Record.find({});

    res.status(200).send(Record2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRecord,
  getAllRecord,
};
