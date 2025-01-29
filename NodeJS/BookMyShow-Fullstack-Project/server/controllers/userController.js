const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const EmailHelper = require("../utils/EmailHelper");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });
    await newUser.save();
    res.send({
      success: true,
      message: "Registration successfull, Please login",
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const loginController = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      return res.send({
        success: false,
        message: "User not found, please register!",
      });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const isMatch = await bcrypt.compare(req.body.password, hashedPassword);
    if (!isMatch) {
    // if (req.body.password !== userExist.password) {
      return res.send({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = jwt.sign({ userId: userExist._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // for sending jwt token as a response payload
    res.send({
      success: true,
      message: "Login successful",
      data: token,
      user: userExist,
    });

    // Send the token as an HTTP-only cookie only
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   expiresIn: new Date(Date.now() + 24 * 3600000), // 1 day
    // })
    // res.send({
    //   success: true,
    //   message: "Login Successfull",
    // });
    // res.cookie("token", token, {
    //     httpOnly: true,       // Makes the cookie inaccessible to client-side scripts (prevents XSS attacks)
    //     secure: process.env.NODE_ENV === "development", // Ensures the cookie is sent only over HTTPS in production
    //     sameSite: "strict",   // Prevents the cookie from being sent with cross-site requests
    //     maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds (1 day here)
    // });
    // return res.send({
    //     success: true,
    //     message: "Login successful",
    // })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const currentUserController = async (req, res) => {
  const user = await User.findById(req.body.userId).select("-password");
  res.send({ success: true, message: "User is authenticated", data: user });
};

const forgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    if (email == undefined) {
      return res.status(401).json({
        status: "failure",
        message: "Please enter the email for forget Password",
      });
    }
    let user = await User.findOne({ email: email });
    if (user == null) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }
    // 90000 - 99999
    if (user?.otp && Date.now() < user?.otpExpiry) {
      return res.status(401).json({
        status: false,
        message: "otp exisit, check your mail",
      });
    }
    const otp = Math.floor(Math.random() * 10000 + 90000);
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();
    await EmailHelper("otp.html", email, {
      name: user.name,
      otp: user.otp,
    });
    res.status(200).json({
      success: true,
      message: "otp has been sent",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
const resetPasswordController = async (req, res) => {
  try {
    const { password, otp } = req.body;
    if (password == undefined || otp == undefined) {
      return res.status(401).json({
        success: false,
        message: "invalid request",
      });
    }
    const user = await User.findOne({ otp: otp });
    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    if (Date.now() > user.otpExpiry) {
      return res.status(401).json({
        success: false,
        message: "otp expired",
      });
    }
    user.password = password;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "password reset successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  currentUserController,
  resetPasswordController,
  forgetPasswordController,
};
