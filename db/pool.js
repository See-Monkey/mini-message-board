import { loadEnvFile } from "node:process";

if (process.env.NODE_ENV !== "production") {
	loadEnvFile();
}

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export default pool;
