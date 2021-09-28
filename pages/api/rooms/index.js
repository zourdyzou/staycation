import nextConnect from "next-connect";
import { dbConnect } from "../../../config/dbConnect";
import { allRooms } from "../../../controllers/roomControllers";

const handler = nextConnect();

dbConnect();

handler.get(allRooms);

export default handler;
