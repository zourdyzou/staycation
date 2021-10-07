import Properties from "../models/properties";

import ErrorBoundary from "../utils/errorBoundary";
import catchAsyncError from "../middlewares/catchAsyncError";
// import APIFeatures from "../utils/apiFeatures";

// GET ALL PROPERTIES AVAILABLE => /api/properties
const allProperties = catchAsyncError(async (req, res) => {
  const properties = await Properties.find();

  res.status(200).json({
    success: true,
    roomsCount: properties.length,
    message: "get all the properties from the database",
    properties,
  });
});

// CREATE A NEW PROPERTY
// TODO: make it look like a marketplace
const newProperty = catchAsyncError(async (req, res) => {
  const property = await Properties.create(req.body);

  res.status(200).json({
    success: true,
    property,
  });
});

// GET A SINGLE PROPERTY FROM DATABASE WITH A SPECIFIC IDs
const getSingleProperty = catchAsyncError(async (req, res, next) => {
  const property = await Properties.findById(req.query.id);

  if (!property) {
    return next(
      new ErrorBoundary(
        `Cannot find property with this ID, check your ID!`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    property,
  });
});

// UPDATE THE SINGLE PROPERTY DETAILS
const updateSingleProperty = catchAsyncError(async (req, res, next) => {
  let property = await Properties.findById(req.query.id);

  if (!property) {
    return next(
      new ErrorBoundary(
        `Cannot find property with this ID, check your ID!`,
        404
      )
    );
  }

  /**
   *  1. WE ARE LOOKING FOR THE IDs
   *  2. CHANGE SOME DETAILS OF THE PROPERTY / UPDATE
   */
  property = await Properties.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    property,
  });
});

//! DELETE THE PROPERTY FROM THE DATABASE
const deleteSingleProperty = catchAsyncError(async (req, res, next) => {
  const property = await Properties.findById(req.query.id);

  if (!property) {
    return next(
      new ErrorBoundary(
        `Cannot find property with this ID, check your ID!`,
        404
      )
    );
  }

  /**
   *  1. WE ARE LOOKING FOR THE IDs
   *  2. DELETE THE PROPERTY
   */
  await property.remove();

  res.status(200).json({
    success: true,
    message: "Room is successfully deleted!",
  });
});

export {
  allProperties,
  newProperty,
  getSingleProperty,
  updateSingleProperty,
  deleteSingleProperty,
};
