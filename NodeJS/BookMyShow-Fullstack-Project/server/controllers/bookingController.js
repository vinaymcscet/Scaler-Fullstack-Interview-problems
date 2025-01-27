const stripe = require("stripe")(process.env.STRIPE_KEY);
const Booking = require("../models/bookingModel");
const Show = require("../models/showModel");
const EmailHelper = require("../utils/EmailHelper");

const makePaymentController = async (req, res) => {
  try {
    const { token, amount } = req.body;
    // whether the customer is already present on stripe
    const customers = await stripe.customers.list({
      email: token.email,
      limit: 1,
    });
    let currCustomer = null;
    if (customers.data.length > 0) {
      currCustomer = customers.data[0];
    } else {
      const createNewCustomer = async () => {
        return await stripe.customers.create({
          source: token.id,
          email: token.email,
        });
      };
      currCustomer = await createNewCustomer();
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      customer: currCustomer.id,
      payment_method_types: ["card"],
      receipt_email: token.email,
      description: "Token has been assigned to the movie",
    });
    const transactionId = paymentIntent.id;
    res.send({
      success: true,
      message: "Payment Successfull, !Tickets Booked",
      data: transactionId,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
const bookShowController = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    const show = await Show.findById(req.body.show);
    const updateBookedSeats = [...show.bookedSeats, ...req.body.seats];
    await Show.findByIdAndUpdate(req.body.show, {
      bookedSeats: updateBookedSeats,
    });
    const populateBookingInfo = await Booking.findById(newBooking._id)
      .populate("user")
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });
    await EmailHelper("ticketTemplate.html", populateBookingInfo.user.email, {
      name: populateBookingInfo.user.name,
      movie: populateBookingInfo.show.movie.title,
      theatre: populateBookingInfo.show.theatre.name,
      date: populateBookingInfo.show.date,
      time: populateBookingInfo.show.time,
      seats: populateBookingInfo.seats,
      amount:
        populateBookingInfo.seats.length * populateBookingInfo.show.ticketPrice,
      transactionId: populateBookingInfo.transactionId,
    });
    res.send({
      success: true,
      message: "New Bookings are Done",
      data: newBooking,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
const getAllBookingsController = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.body.userId })
      .populate("user")
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });
    res.send({
      success: true,
      message: "Bookings fetched!",
      data: bookings,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};
module.exports = {
  bookShowController,
  makePaymentController,
  getAllBookingsController,
};
