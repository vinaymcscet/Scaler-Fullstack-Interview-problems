const express = require('express');
const { registerController, loginController, currentUserController, forgetPasswordController, resetPasswordController } = require('../controllers/userController');
const auth = require('../middleWares/authMiddleware');


const userRouter = express.Router(); // create a Router object to handle Routes for users.

// register a user
userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/current", auth, currentUserController);
userRouter.post("/forgetPassword", forgetPasswordController);
userRouter.post("/resetPassword", resetPasswordController);

module.exports = userRouter;