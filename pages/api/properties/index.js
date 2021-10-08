import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  allProperties,
  newProperty,
} from "../../../controllers/propertiesControllers";

import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(allProperties);
handler.post(newProperty);

export default handler;
