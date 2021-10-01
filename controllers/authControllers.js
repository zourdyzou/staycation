import cloudinary from "cloudinary";
import User from "../models/user";

// import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";
// import APIFeatures from "../utils/apiFeatures";

//! cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});

// REGISTER USER => /api/rooms/register
const registerUser = catchAsyncError(async (req, res) => {
  // CLOUDINARY
  const results = cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "staycation/avatars",
    width: "150",
    crop: "scale",
  });

  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: results.public_id,
      url: results.secure_url,
    },
    role,
  });

  res.status(200).json({
    success: true,
    status: 200,
    message: "Account created successfully!",
    user,
  });
});

export { registerUser };
