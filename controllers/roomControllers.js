import Room from "../models/room";

import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";

// get all rooms => /api/rooms
const allRooms = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();

  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// create a new room
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// get a single room item
const getSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(
      new ErrorBoundary(`Cannot find room with this ID, check your ID!`, 404)
    );
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// update the details of a single room item
const updateSingleRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(
      new ErrorBoundary(`Cannot find room with this ID, check your ID!`, 404)
    );
  }

  // looking for the id first => the body that we going to change/update
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

//! delete the details of a single room item
const deleteSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(
      new ErrorBoundary(`Cannot find room with this ID, check your ID!`, 404)
    );
  }

  // looking for the id first => the body that we going to change/update
  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is successfully deleted!",
  });
});

export { allRooms, newRoom, getSingleRoom, updateSingleRoom, deleteSingleRoom };
