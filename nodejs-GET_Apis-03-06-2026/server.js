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

/// GET single user by id
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  // Validation 1: id should be a valid number
  if (!id || isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid user id. User id must be a valid number.',
    });
  }

  // Find user
  const user = users.find((user) => user.id === id);

  // Validation 2: user should exist
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found with id ${id}`,
    });
  }

  // Success response
  res.status(200).json({
    success: true,
    message: 'User fetched successfully',
    data: user,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`The server is running on port http://localhost:8080`);
});
