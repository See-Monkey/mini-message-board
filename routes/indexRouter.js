import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
	res.send("Index page");
});

indexRouter.get("/new", (req, res) => {
	res.send("New message form");
});

export default indexRouter;
