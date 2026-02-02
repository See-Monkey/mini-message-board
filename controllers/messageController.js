import { getMessageById, addMessage } from "../models/messageModel.js";

const getMessage = async (req, res) => {
	const message = await getMessageById(req.params.messageId);

	res.render("message", { message });
};

const getMessageIndex = (req, res) => {
	res.render("message", {
		message: null,
	});
};

const postNewMessage = (req, res) => {
	const { user, text } = req.body;

	if (!user || !text) {
		return res.status(400).send("Name and message are required");
	}

	addMessage(user, text);

	// redirect back to index after successful POST
	res.redirect("/");
};

export { getMessage, getMessageIndex, postNewMessage };
