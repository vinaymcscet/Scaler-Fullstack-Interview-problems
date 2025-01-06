const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerController = async(req, res) => {
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
}

const loginController = async(req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email });
        if(!userExist) {
            return res.send({
                success: false,
                message: "User not found, please register!",
            })
        }
        if(req.body.password !== userExist.password) {
            return res.send({
                success: false,
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({ userId: userExist._id}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        // for sending jwt token as a response payload
        // return res.send({
        //     success: true,
        //     message: "Login successful",
        //     data: token,
        // })

        // Send the token as an HTTP-only cookie only
        res.cookie("token", token, {
            httpOnly: true,       // Makes the cookie inaccessible to client-side scripts (prevents XSS attacks)
            secure: process.env.NODE_ENV === "development", // Ensures the cookie is sent only over HTTPS in production
            sameSite: "strict",   // Prevents the cookie from being sent with cross-site requests
            maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds (1 day here)
        });
        return res.send({
            success: true,
            message: "Login successful",
        })
    } catch(err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports = {
    registerController,
    loginController
}