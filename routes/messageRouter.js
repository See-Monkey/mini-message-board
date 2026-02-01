import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
	res.send("Address should have messageId specified");
});

messageRouter.get("/:messageId", (req, res) => {
	const { messageId } = req.params;
	res.send(`Message ID: ${messageId}`);
});

export default messageRouter;
