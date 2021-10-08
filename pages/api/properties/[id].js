import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleProperty,
  deleteSingleProperty,
  updateSingleProperty,
} from "../../../controllers/propertiesControllers";

import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(getSingleProperty);
handler.put(updateSingleProperty);
handler.delete(deleteSingleProperty);

export default handler;
