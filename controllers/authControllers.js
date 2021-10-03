import cloudinary from "cloudinary";
import absoluteUrl from "next-absolute-url";
import User from "../models/user";

import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";
import sendEmailRecovery from "../utils/sendEmailRecovery";
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

// GET CURRENT USER CREDENTIALS FROM SERVER => /api/me
const currentUserProfile = catchAsyncError(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

// UPDATE CURRENT USER CREDENTIALS FROM SERVER => /api/me/update
const updateUserProfile = catchAsyncError(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;

    if (req.body.password) user.password = req.body.password;
  }

  // UPDATE => user avatar profile
  if (req.body.avatar !== "") {
    const imageID = user.avatar.public_id;

    // DELETE USER PREVIOUS AVATAR IMAGE
    await cloudinary.v2.uploader.destroy(imageID);

    const results = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "staycation/avatars",
      width: "150",
      crop: "scale",
    });

    user.avatar = {
      public_id: results.public_id,
      url: results.secure_url,
    };
  }

  // SAVE => the new credentials
  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

// SEND EMAIL RECOVERY FOR PASSWORD TOKEN => /api/password/forgot
const sendEmailForgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  // GET ORIGIN PATH
  const { origin } = absoluteUrl(req);

  if (!user) {
    return next(new ErrorBoundary("User not found with this email!", 404));
  }

  // GET RESET PASSWORD TOKEN
  const resetToken = user.getResetPasswordToken();

  // SAVE THE FOUNDED USER
  await user.save({ validateBeforeSave: false });

  // CREATE RESET PASSWORD URL
  const resetURL = `${origin}/password/reset/${resetToken}`;

  const informationMessage = `Your password reset URL is as follow: \n\n ${resetURL} \n\n if you have not requested this email recovery token, please ignore it!`;

  try {
    await sendEmailRecovery({
      email: user.email,
      subject: "Staycation Password Recovery",
      message: informationMessage,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpired = undefined;

    // SAVE USER AGAIN => handling error
    await user.save({ validateBeforeSave: false });

    return next(new ErrorBoundary(error.message, 500));
  }
});

export {
  registerUser,
  currentUserProfile,
  updateUserProfile,
  sendEmailForgotPassword,
};
