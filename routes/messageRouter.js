import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
	res.render("message", { messageId: null });
});

messageRouter.get("/:messageId", (req, res) => {
	const { messageId } = req.params;

	res.render("message", { messageId });
});

export default messageRouter;
