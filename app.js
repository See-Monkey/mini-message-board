import { loadEnvFile } from "node:process";
loadEnvFile();

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/indexRouter.js";
import messageRouter from "./routes/messageRouter.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/message", messageRouter);

app.use((req, res) => {
	res.status(404).send("404 Error - Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`Listening on port ${PORT}!`);
});
