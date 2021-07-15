const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const db = new JsonDB(
	new Config(
		process.env.NODE_ENV === "test" ? "testDB" : "mainDB",
		true,
		true,
		"/",
	),
);

module.exports = db;
