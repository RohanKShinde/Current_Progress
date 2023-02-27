

const path = require('path');
const express = require('express');
const userRouter = require('./routers/user');
const mongoose = require('mongoose');

require('./db');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
app.use(userRouter);



app.get('/', (req, res) => {
  res.send('<h2>This is from index.js file</h2>');
});

app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) {
      res.status(500).send('Error saving user');
    } else {
      res.send('User saved successfully');
    }
  });
});


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


