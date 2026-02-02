import { getMessages } from "../models/messageModel.js";

const getIndex = async (req, res) => {
	const messages = await getMessages();
	res.render("index", { messages });
};

const getNewMessageForm = (req, res) => {
	res.render("form");
};

export { getIndex, getNewMessageForm };
