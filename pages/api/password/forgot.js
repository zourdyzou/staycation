import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { sendEmailForgotPassword } from "../../../controllers/authControllers";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.post(sendEmailForgotPassword);

export default handler;
