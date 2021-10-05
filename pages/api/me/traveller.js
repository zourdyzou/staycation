import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getAllUser } from "../../../controllers/authControllers";

import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(getAllUser);

export default handler;
