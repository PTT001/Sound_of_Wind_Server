const message = require('../models/message.model');

const createmessage = async (req, res) => {
  try {
    const profile2 = await message.create(req.body);
    res.status(200).send(profile2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllmessage = async (req, res) => {
  try {
    const profile2 = await message.find({});
    res.status(200).send(profile2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createmessage, getAllmessage };
