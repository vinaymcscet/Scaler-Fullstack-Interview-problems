const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/userController');
const auth = require('../middleWares/authMiddleware');


const userRouter = express.Router(); // create a Router object to handle Routes for users.

// register a user
userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/current", auth, currentUserController);

module.exports = userRouter;