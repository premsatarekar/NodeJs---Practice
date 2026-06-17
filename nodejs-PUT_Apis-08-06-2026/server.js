const express = require('express');
const app = express();

PORT = 8080;

app.get('/', (req, res) => {
  res.send('hi the server is running');
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'the user id is not correct',
    });
  }

  const userIndex = users.findIndex((users) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      success: flase,
      message: 'User not found',
    });
  }

  const { name, email } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'the name fied should be correct',
    });
  }

  if (!email || email.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'the email fied should be correct',
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'the email should include @ in the email',
    });
  }

  const cleanEmail = email.toLowerCase().trim();

  const emailAleadyExists = users.some(
    (user) => user.email === cleanEmail && user.id !== id
  );

  if (emailAleadyExists) {
    return res.status(400).json({
      success: false,
      message: 'the user alreday existed',
    });
  }

  const updateUser = {
    id: users[userIndex].id,
    name: name.trim(),
    email: cleanEmail,
  };

  users[userIndex] = updateUser;

  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    date: update
  });
});

app.listen(PORT, (req, res) => {
  console.log(`the server is running on the PORT http://localhost:${PORT}`);
});
