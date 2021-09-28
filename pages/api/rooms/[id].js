import nextConnect from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getSingleRoom } from "../../../controllers/roomControllers";

const handler = nextConnect();

dbConnect();

handler.get(getSingleRoom);

export default handler;
