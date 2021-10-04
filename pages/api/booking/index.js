import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { newBooking } from "../../../controllers/bookingControllers";

import { isAuthenticatedUser } from "../../../middlewares/authMiddleware";
import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.use(isAuthenticatedUser).post(newBooking);

export default handler;
