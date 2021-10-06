import Moment from "moment";
import { extendMoment } from "moment-range";
import Booking from "../models/booking";

import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";

const moment = extendMoment(Moment);

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

  if (booking && booking.length === 0) {
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

// CHECK BOOKING OF A ROOM  => /api/booking/check-booked-dates
const checkBookedDate = catchAsyncError(async (req, res, next) => {
  // FIND THE BOOKING ROOM
  const { roomId } = req.query;

  const bookings = await Booking.find({ room: roomId });

  // 60 minutes
  const timeDifferentiation = moment().utcOffset() / 60;

  let bookedDates = [];

  bookings.forEach((booking) => {
    // DIFFERENTIATE IN HOURS BETWEEN CHECKINDATE AND CHECKOUTDATE
    const checkInDate = moment(booking.checkInDate).add(
      timeDifferentiation,
      "hours"
    );
    const checkOutDate = moment(booking.checkOutDate).add(
      timeDifferentiation,
      "hours"
    );

    const range = moment.range(moment(checkInDate), moment(checkOutDate));

    const dates = Array.from(range.by("day"));

    bookedDates = bookedDates.concat(dates);
  });

  if (!bookings) {
    return next(
      new ErrorBoundary(
        "Sorry cannot get the booking data, please contact our technical support for further details"
      )
    );
  }

  res.status(200).json({
    success: true,
    status: 200,
    message: "List of the Booked Dates",
    bookedDates,
  });
});

// GET ALL BOOKING FROM CURRENT USER LOGGED  => /api/booking/check-booked-dates
const getCurrentBookingFromUser = catchAsyncError(async (req, res, next) => {
  // FIND BOOKING BY USER
  const bookings = await Booking.find({ user: req.user._id })
    .populate({
      path: "room",
      select: "name pricePerNight images",
    })
    .populate({
      path: "user",
      select: "name email",
    });

  if (!bookings) {
    return next(
      new ErrorBoundary(
        "Sorry cannot get the booking data, please contact our technical support for further details"
      )
    );
  }

  res.status(200).json({
    success: true,
    status: 200,
    message: "List of the Booked Dates From Current User",
    bookings,
  });
});

// GET BOOKING DETAILS FROM CURRENT USER LOGGED  => /api/booking/:id
const getBookingDetailsFromUser = catchAsyncError(async (req, res, next) => {
  // FIND BOOKING BY USER
  const bookings = await Booking.findById(req.query.id)
    .populate({
      path: "room",
      select: "name pricePerNight images",
    })
    .populate({
      path: "user",
      select: "name email",
    });

  if (!bookings) {
    return next(
      new ErrorBoundary(
        "Sorry cannot get the booking data, please contact our technical support for further details"
      )
    );
  }

  res.status(200).json({
    success: true,
    status: 200,
    message: "List of the Booked Dates From Current User",
    bookings,
  });
});

export {
  newBooking,
  checkBookingAvailability,
  checkBookedDate,
  getCurrentBookingFromUser,
  getBookingDetailsFromUser,
};
