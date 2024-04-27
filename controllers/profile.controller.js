const profile = require('../models/profile.model');

const createUser = async (req, res) => {
  try {
    const profile2 = await profile.create(req.body);
    res.status(200).send(profile2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllusers = async (req, res) => {
  try {
    const profile2 = await profile.find({});
    res.status(200).send(profile2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const profiles = await profile.find({ Role: req.body.Role });

    const newProfile = await profile.findByIdAndUpdate(
      profiles[0]._id,
      req.body
    );

    if (!newProfile) {
      return res.status(404).json({ message: 'profile not found' });
    }

    const updatedProfile = await profile.findById(profiles[0]._id);
    res.status(200).send(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { Role } = req.params;

    console.log(Role, '哈');

    const profiles = await profile.find({ Role });

    console.log(profiles[0]._id, '?');

    const deletedProfile = await profile.findByIdAndDelete(profiles[0]._id);

    if (!deletedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllusers, createUser, updateUser, deleteUser };
