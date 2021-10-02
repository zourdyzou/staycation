import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { updateUserProfile } from "../../../controllers/authControllers";

import { isAuthenticatedUser } from "../../../middlewares/authMiddleware";
import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(updateUserProfile);

export default handler;
