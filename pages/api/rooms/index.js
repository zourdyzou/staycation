import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomControllers";

const handler = nextConnect();

dbConnect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
