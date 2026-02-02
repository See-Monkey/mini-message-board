import { Router } from "express";
import { getIndex, getNewMessageForm } from "../controllers/indexController.js";
import { postNewMessage } from "../controllers/messageController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getNewMessageForm);
indexRouter.post("/new", postNewMessage);

export default indexRouter;
