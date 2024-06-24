const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const roledata = require('./models/role.model.js');
const profileRoute = require('./routes/profile.route.js');
const RecordRoute = require('./routes/Record.route.js');
const messageRoute = require('./routes/message.route.js');

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use('/api/profile', profileRoute);
app.use('/api/Record', RecordRoute);
app.use('/api/message', messageRoute);

app.get('/', (req, res) => {
  res.send('hello');
});

// get role data
app.get('/api/role', async (req, res) => {
  try {
    const role = await roledata.find({});
    res.status(200).send(role);
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
