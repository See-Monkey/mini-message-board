// const messages = [
// 	{
// 		id: 1,
// 		text: "Hi there!",
// 		user: "Amando",
// 		added: new Date(),
// 	},
// 	{
// 		id: 2,
// 		text: "Hello World!",
// 		user: "Charles",
// 		added: new Date(),
// 	},
// ];

// const getMessages = async () => {
// 	return messages;
// };

// const getMessageById = async (id) => {
// 	return messages.find((m) => m.id === Number(id));
// };

// const addMessage = async (user, text) => {
// 	const nextId = messages.length + 1;

// 	messages.push({ id: nextId, text: text, user: user, added: new Date() });
// };

import pool from "../db/pool.js";

const getMessages = async () => {
	const { rows } = await pool.query(
		'SELECT id, "user", text, added FROM messages ORDER BY added ASC',
	);

	return rows;
};

const getMessageById = async (id) => {
	const { rows } = await pool.query(
		'SELECT id, "user", text, added FROM messages WHERE id = $1',
		[id],
	);

	return rows[0]; // undefined if not found (perfectly fine)
};

const addMessage = async (user, text) => {
	await pool.query('INSERT INTO messages ("user", text) VALUES ($1, $2)', [
		user,
		text,
	]);
};

export { getMessages, getMessageById, addMessage };
