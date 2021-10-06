import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getCurrentBookingFromUser } from "../../../controllers/bookingControllers";

import { isAuthenticatedUser } from "../../../middlewares/authMiddleware";
import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(getCurrentBookingFromUser);

export default handler;
