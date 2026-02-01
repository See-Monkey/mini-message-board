import { getMessageById } from "../models/messageModel.js";

const getMessage = (req, res) => {
	const message = getMessageById(req.params.messageId);

	res.render("message", { message });
};

const getMessageIndex = (req, res) => {
	res.render("message", {
		message: null,
	});
};

export { getMessage, getMessageIndex };
