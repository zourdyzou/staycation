import cloudinary from "cloudinary";
import User from "../models/user";

// import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";
// import APIFeatures from "../utils/apiFeatures";

//! cloudinary config
cloudinary.v2.config({
  cloud_name: "zenlock",
  api_key: "924936384819332",
  api_secret: "Cav3f_4jx2pTQugjyAXJyd88j74",
});

// REGISTER USER => /api/rooms/register
const registerUser = catchAsyncError(async (req, res) => {
  // CLOUDINARY
  const results = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "staycation/avatars",
    width: "150",
    crop: "scale",
  });

  const { name, email, password } = req.body;

  console.log({
    public_id: results.public_id,
    url: results.secure_url,
  });

  // eslint-disable-next-line no-unused-vars
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: results.public_id,
      url: results.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    status: 200,
    message: "Account created successfully!",
    user,
  });
});

export { registerUser };
