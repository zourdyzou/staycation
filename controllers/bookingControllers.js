import Booking from "../models/booking";

import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";

// CREATE NEW BOOKING => /api/booking
const newBooking = catchAsyncError(async (req, res, next) => {
  //! IF ANYTHING WRONG GO BACK HERE
  const {
    room,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = req.body;

  const booking = await Booking.create({
    room,
    user: req.user._id,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
    paidAt: Date.now(),
  });

  if (!booking) {
    return next(
      new ErrorBoundary(
        "Your booking is cannot created successfully!, please contact our Web Support!",
        500
      )
    );
  }

  res.status(200).json({
    success: true,
    status: 200,
    message: "Booking created successfully!",
    booking,
  });
});

export { newBooking };
