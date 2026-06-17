const express = require('express');
const app = express();
app.use(express.json());

const PORT = 8080;

let users = [
  { id: 1, name: 'Prem', email: 'prem@gmail.com' },
  { id: 2, name: 'Rahul', email: 'rahul@gmail.com' },
  { id: 3, name: 'Akash', email: 'akash@gmail.com' },
];

app.get('/', (req, res) => {
  res.send('hey i am working');
});

// delete api

app.delete('/api/users/:id', (req, res) => {
  // step 1 : get the user id
  const userId = Number(request.params.id);

  // step 2 : check weather the id is correct or not
  if (!Number.isInteger(userId) || userId <= 1) {
    return res.status(400).json({
      success: false,
      message: 'User Id doesnot exist',
    });
  }

  //  step 3 : Find user index
  const userIndex = users.findIndex((users) => user.id === userId);

  // step 4 : check weather the userIndex is correct or not
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'User Not found',
    });
  }

  //    step 5 : delete the userId
  const deleteUser = users.splice(userIndex, 1)[0];

  //   step 6: send postive response
  return res.status(200).json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`the server is running on port http://localhost:${PORT}`);
});
