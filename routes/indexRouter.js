import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
	res.render("index");
});

indexRouter.get("/new", (req, res) => {
	res.render("form");
});

export default indexRouter;
