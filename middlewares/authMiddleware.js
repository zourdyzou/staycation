import { getSession } from "next-auth/client";
import catchAsyncError from "./catchAsyncError";
import ErrorBoundary from "../utils/errorBoundary";

export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  // GET AUTH-TOKEN FROM =>  req.headers
  const session = await getSession({ req });

  console.log({
    SESSION: session.user,
  });

  if (!session) {
    return next(
      new ErrorBoundary("Please Login first to access this product!", 401)
    );
  }

  req.user = session.user;
  next();
});
