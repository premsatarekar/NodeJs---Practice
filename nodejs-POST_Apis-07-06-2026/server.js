const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('hello prem i am server running');
});

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email, role } = req.body;

  // validation 1

  if (!name || name.trim() === '') {
    res.status(400).json({
      success: false,
      message: 'the name is required',
    });
  }

  // validation 2

  if (!email || name.trim() === '') {
    res.status(400).json({
      success: false,
      message: 'the email is required',
    });
  }

  // email validation

  if (!email.includes('@')) {
    res.status(400).json({
      success: false,
      message: 'the email is need to be correct formate',
    });
  }

  //   validation
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    res.status(409).json({
      success: false,
      message: 'the user already existing with these email id',
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    role: role || 'user',
    isActive: true,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'User created successfully.',
    data: newUser,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on PORT http://localhost:${PORT}`);
});
