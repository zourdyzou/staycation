import nextConnect from "next-connect";
import dbConnect from "../../config/dbConnect";

import { currentUserProfile } from "../../controllers/authControllers";
import { isAuthenticatedUser } from "../../middlewares/authMiddleware";

import onError from "../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

// USE THE isAuthenticated middleware first
handler.use(isAuthenticatedUser).get(currentUserProfile);

export default handler;
