import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleRoom,
  updateSingleRoom,
  deleteSingleRoom,
} from "../../../controllers/roomControllers";

import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(getSingleRoom);
handler.put(updateSingleRoom);
handler.delete(deleteSingleRoom);

export default handler;
