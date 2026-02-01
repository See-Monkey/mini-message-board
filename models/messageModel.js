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

const getMessages = () => {
	return messages;
};

const getMessageById = (id) => {
	return messages.find((m) => m.id === Number(id));
};

const addMessage = (user, text) => {
	const nextId = messages.length + 1;

	messages.push({ id: nextId, text: text, user: user, added: new Date() });
};

export { getMessages, getMessageById, addMessage };
