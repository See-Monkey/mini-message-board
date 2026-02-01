const getIndex = (req, res) => {
	res.render("index");
};

const getNewMessageForm = (req, res) => {
	res.render("form");
};

export { getIndex, getNewMessageForm };
