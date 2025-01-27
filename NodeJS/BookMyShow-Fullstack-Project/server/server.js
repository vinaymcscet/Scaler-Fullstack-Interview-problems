const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const movieRouter = require('./routes/movieRoutes');
const theatreRouter = require('./routes/theatreRoutes');
const showRouter = require('./routes/showRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const auth = require('./middleWares/authMiddleware');

connectDB();
/** Routes */
app.use(cookieParser());
app.use(express.json());// ALLOWS EXPRESS TO PARSE JSON
app.use("/api/users/", userRouter);
app.use("/api/movies/", auth, movieRouter);
app.use("/api/theatres/", auth, theatreRouter);
app.use("/api/shows/", auth, showRouter);
app.use("/api/bookings/", auth, bookingRouter);

app.listen(8082, () => {
    console.log("server Started");
})