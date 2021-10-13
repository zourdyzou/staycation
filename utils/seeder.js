const mongoose = require("mongoose");
const properties = require("../data/rooms.json");

// const dbConnect = require("../config/dbConnect");

const Room = require("../models/room");

// const Properties = require("../models/properties");

mongoose.connect(
  `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_USER}:${process.env.NEXT_PUBLIC_MONGO_PASSWORD}@${process.env.NEXT_PUBLIC_MONGO_DATABASE_NAME}.s2ajg.mongodb.net/Cluster0?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const seedRooms = async () => {
  try {
    // delete previous room collection
    await Room.deleteMany();
    console.log("Previous data deleted (mock data)");

    // push a fresh data
    await Room.insertMany(properties);
    console.log("All properties are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
