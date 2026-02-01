import { Router } from "express";
import { getIndex, getNewMessageForm } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getNewMessageForm);

export default indexRouter;
