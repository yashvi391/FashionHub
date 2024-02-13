// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

router.post('/', userController.addUser.bind(userController));

module.exports = router;
