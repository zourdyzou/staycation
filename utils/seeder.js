const mongoose = require("mongoose");
const properties = require("../data/properties.json");

// const dbConnect = require("../config/dbConnect");

const Room = require("../models/properties");

// const Properties = require("../models/properties");

mongoose.connect(
  "mongodb+srv://brothergoode:OyTOj11THOLTCciu@cluster0.s2ajg.mongodb.net/Cluster0?retryWrites=true&w=majority",
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
