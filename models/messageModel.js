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

const getMessageById = (id) => {
	return messages.find((m) => m.id === Number(id));
};

export { getMessageById };
