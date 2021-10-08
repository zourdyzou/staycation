const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxlength: [120, "Room name cannot exceed 100 characters!."],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price per night"],
    maxlength: [4, "Room name cannot exceed 4 characters!."],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter room description"],
  },
  address: {
    type: String,
    required: [true, "Please enter room address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter room guestCapacity"],
  },
  numOfBeds: {
    type: String,
    required: [true, "Please enter room numOfBeds in the room"],
  },
  internet: {
    type: String,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  livingRoom: {
    type: String,
    default: false,
  },
  airConditioning: {
    type: String,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  cleaningService: {
    type: Boolean,
    default: false,
  },
  furnished: {
    type: String,
    default: false,
  },
  bathroom: {
    type: String,
    default: false,
  },
  refrigerator: {
    type: String,
    default: false,
  },
  television: {
    type: String,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category for room",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

// export default mongoose.models.Room || mongoose.model("Room", roomSchema);

module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
