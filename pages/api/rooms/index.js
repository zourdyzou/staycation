import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomControllers";

import onError from "../../../middlewares/errors";

const handler = nextConnect({ onError });

dbConnect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
