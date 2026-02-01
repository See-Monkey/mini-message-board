import { Router } from "express";
import {
	getMessageIndex,
	getMessage,
} from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.get("/", getMessageIndex);
messageRouter.get("/:messageId", getMessage);

export default messageRouter;
