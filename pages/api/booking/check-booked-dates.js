import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { checkBookedDate } from "../../../controllers/bookingControllers";

import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(checkBookedDate);

export default handler;
