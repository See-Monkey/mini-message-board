const messages = [
	{
		id: 1,
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		id: 2,
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

import pool from "../db/pool.js";

const getMessages = async () => {
	return messages;
};

const getMessageById = async (id) => {
	return messages.find((m) => m.id === Number(id));
};

const addMessage = async (user, text) => {
	const nextId = messages.length + 1;

	messages.push({ id: nextId, text: text, user: user, added: new Date() });
};

export { getMessages, getMessageById, addMessage };
