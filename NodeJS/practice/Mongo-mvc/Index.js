const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./Config/db');
const productRouter = require('./Routes/productRoutes');
const userRouter = require('./Routes/userRoutes');
const app = express();

// connection to db
connectDB();
// middlewares
app.use(express.json());

// Routes
app.use('/api/products', productRouter);
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
   res.send("Welcome to the product API");
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
}); 

const PORT  = 8081;
const HOST = 'http://localhost';

app.listen(PORT, function() {
    console.log(`server started at ${HOST}:${PORT}`);
})