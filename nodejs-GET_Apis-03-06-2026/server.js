const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('hello the server is running');
// });

const users = [
  {
    id: 1,
    name: 'Prem',
    email: 'prem@example.com',
    role: 'admin',
    isActive: true,
  },
  {
    id: 2,
    name: 'prashant',
    email: 'prashant@example.com',
    role: 'user',
    isActive: true,
  },
];

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'server is properly working',
  });
});

// to get all user
app.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'users fetched successfully',
    totalusers: users.length,
    data: users,
  });
});

// to get user by id
app.get('/users/:id', (req, res) => {
  const id = Number(res.params.id);

  // validation 1
  if (!id || isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'invalid user id, user id must be a number',
    });
  }

  // validation 2
  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'sorry the user was not found',
    });
  }

  // Success response
  res.status(200).json({
    success: true,
    message: 'User fetched successfully',
    data: user,
  });

  const users = users.find((user) => user.id === id);
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port http://localhost:8080`);
});
