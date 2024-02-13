// models/userModel.js
const db = require('../config/db');

class UserModel {
  addUser(id,email, password,confirm_password, callback) {
    const query = 'INSERT INTO users (id,email, password,confirm_password) VALUES (?, ?,?,?)';
    db.query(query, [id,email,password,confirm_password], callback);
  }
}

module.exports = UserModel;
