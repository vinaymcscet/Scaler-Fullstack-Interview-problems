const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');

connectDB();
/** Routes */
app.use(cookieParser());
app.use(express.json());// ALLOWS EXPRESS TO PARSE JSON
app.use("/api/users/", userRouter);

app.listen(8082, () => {
    console.log("server Started");
})