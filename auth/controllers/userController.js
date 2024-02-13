// controllers/userController.js
const UserModel = require('../models/userModel');

class UserController {
  addUser(req, res) {
    const { id,email,password,confirm_password} = req.body;
    const userModel = new UserModel();

    userModel.addUser(id,email,password,confirm_password, (err) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).json({ message: 'User added successfully' });
      }
    });
  }
}

module.exports = UserController;
