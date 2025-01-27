const express = require("express");
const authMiddleware = require("../middleWares/authMiddleware");
const { makePaymentController, bookShowController, getAllBookingsController } = require("../controllers/bookingController");

const bookingRouter = express.Router();

bookingRouter.post("/makePayment", authMiddleware, makePaymentController);
bookingRouter.post("/bookShow", authMiddleware, bookShowController);
bookingRouter.get("/getAllBookings", authMiddleware, getAllBookingsController);

module.exports = bookingRouter;