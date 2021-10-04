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

// CHECK ROOM BOOKING AVAILABILITY => /api/booking/check
const checkBookingAvailability = catchAsyncError(async (req, res, next) => {
  //! IF ANYTHING WRONG GO BACK HERE
  let { roomId, checkInDate, checkOutDate } = req.query;

  checkInDate = new Date(checkInDate);
  checkOutDate = new Date(checkOutDate);

  // FIND THE BOOKING ROOM

  /**
   *  $and: mongoDB operation
   *     => we check the checkInDate inside the database
   *        are not LESS THAN EQUAL to checkOutDate
   *     => VICE VERSA
   */

  const booking = await Booking.find({
    room: roomId,
    $and: [
      {
        checkInDate: {
          $lte: checkOutDate,
        },
      },
      {
        checkOutDate: {
          $gte: checkInDate,
        },
      },
    ],
  });

  // CHECK IF THERE IS ANY BOOKING AVAILABLE
  let isAvailable;

  if (booking && booking.length !== 0) {
    isAvailable = true;
  } else {
    isAvailable = false;
  }

  //! BACK HERE AGAIN
  if (!booking) {
    return next(
      new ErrorBoundary(
        "There is booking available at the moment!, please contact our Web Support!",
        500
      )
    );
  }

  res.status(200).json({
    success: true,
    status: 200,
    message: isAvailable ? "Booking is available" : "Booking is not available",
    isAvailable,
  });
});

export { newBooking, checkBookingAvailability };
