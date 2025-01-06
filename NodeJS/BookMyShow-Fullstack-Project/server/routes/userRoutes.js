const express = require('express');
const { registerController, loginController } = require('../controllers/userController');


const userRouter = express.Router(); // create a Router object to handle Routes for users.

// register a user
userRouter.post("/register", registerController);
userRouter.post("/login", loginController);

module.exports = userRouter;