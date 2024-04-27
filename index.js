const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profile = require('./models/profile.model.js');
const roledata = require('./models/role.model.js');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

// get final user data
app.get('/api/profile', async (req, res) => {
  try {
    const profile2 = await profile.find({});
    res.status(200).send(profile2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get role data
app.get('/api/role', async (req, res) => {
  try {
    const role = await roledata.find({});
    res.status(200).send(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create user
app.post('/api/profile', async (req, res) => {
  try {
    const profile2 = await profile.create(req.body);
    res.status(200).send(profile2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update data
app.put('/api/profile', async (req, res) => {
  try {
    const Role = req.body.Role;
    console.log(Role);

    // const newProfile = await profile.findByIdAndUpdate(id, req.body);

    // if (!newProfile) {
    //   return res.status(404).json({ message: 'profile not found' });
    // }

    // const updatedProfile = await profile.findById(id);

    // res.status(200).send(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 新增角色資料到DB
// app.post('/api/roledata', async (req, res) => {
//   try {
//     const roledata2 = await roledata.create(req.body);
//     res.status(200).send(roledata2);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    'mongodb+srv://haoyilu123:gjmZ1vlbyB42UyDo@cluster0.pylmfmz.mongodb.net/Role_Data?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('successfully connect');

    app.listen(3000, () => {
      console.log('listening port 3000');
    });
  });
