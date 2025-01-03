const express = require('express');
const User = require("../models/userModel");

const userRouter = express.Router(); // create a Router object to handle Routes for users.

// register a user
userRouter.post("/register", async(req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if(userExists) {
            return res.send({
                success: false,
                message: "User already exists",
            })
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: "Registration successfull, Please login",
        })
    } catch(err) {
        return res.status(500).send({ message: err.message })
    }
})

userRouter.post("/login", async(req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email });
        if(!userExist) {
            return res.send({
                success: false,
                message: "User not found, please register!"
            })
        }
        if(req.body.password !== userExist.password) {
            return res.send({
                success: false,
                message: "Invalid Password"
            })
        }
        return res.send({
            success: true,
            message: "Login successful"
        })
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
})

module.exports = userRouter;