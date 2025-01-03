const express = require('express');
const app = express();

require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');

connectDB();
/** Routes */
app.use(express.json());// ALLOWS EXPRESS TO PARSE JSON
app.use("/api/users/", userRouter);

app.listen(8082, () => {
    console.log("server Started");
})