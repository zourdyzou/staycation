import Room from "../models/room";

import ErrorBoundary from "../utils/errorBoundary";

// get all rooms => /api/rooms
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Sorry cannot retrieve the data: ${error.message}`,
    });
  }
};

// create a new room
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Sorry cannot retrieve the data: ${error.message}`,
    });
  }
};

// get a single room item
const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      // res.status(404).json({
      //   success: false,
      //   error: `Cannot find room with this ID, check your ID!`,
      // });

      return next(
        new ErrorBoundary(`Cannot find room with this ID, check your ID!`, 404)
      );
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Sorry cannot retrieve the data: ${error.message}`,
    });
  }
};

// update the details of a single room item
const updateSingleRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: `Cannot find room with this ID, check your ID!`,
      });
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
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Sorry cannot retrieve the data: ${error.message}`,
    });
  }
};

//! delete the details of a single room item
const deleteSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: `Cannot find room with this ID, check your ID!`,
      });
    }

    // looking for the id first => the body that we going to change/update
    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room is successfully deleted!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Sorry cannot retrieve the data: ${error.message}`,
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateSingleRoom, deleteSingleRoom };
