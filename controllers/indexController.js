import { getMessages } from "../models/messageModel.js";

const getIndex = (req, res) => {
	const messages = getMessages();
	res.render("index", { messages });
};

const getNewMessageForm = (req, res) => {
	res.render("form");
};

export { getIndex, getNewMessageForm };
