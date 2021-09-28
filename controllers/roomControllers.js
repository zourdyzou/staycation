import Room from "../models/room";

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
const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: false,
        error: `Cannot find room with this ID, check your ID!`,
      });
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

export { allRooms, newRoom, getSingleRoom };
