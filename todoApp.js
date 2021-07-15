const express = require("express");

const todoApp = express();
const mainRouter = require("./router");

todoApp.use((req, res, next) => {
	res.setHeader("X-Powered-By", "envoy"); // make a little decoy :))
	next();
});
todoApp.use(express.json());
todoApp.use(express.urlencoded({ extended: true }));

todoApp.use(mainRouter);

todoApp.listen(process.env.NODE_ENV === "test" ? 8008 : 8000);
