import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { checkBookingAvailability } from "../../../controllers/bookingControllers";

// import { isAuthenticatedUser } from "../../../middlewares/authMiddleware";
import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(checkBookingAvailability);

export default handler;
