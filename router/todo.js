const { Router } = require("express");
const { TodosService } = require("../services");
const router = new Router();

// swagger inline ...
// express validator or Joy ...
// paginator, search, filter, order
router.get("/", async (req, res) => {
	try {
		return res.status(200).json(await TodosService.list());
	} catch (error) {
		// logger
		console.error(error);
		return res.status(500).json(error); // status codes ...
	}
});

router.get("/:id", async (req, res) => {
	let {
		params: { id },
	} = req;

	try {
		return res.status(200).json(await TodosService.read(id));
	} catch (error) {
		return res.status(500).json(error);
	}
});

router.post("/", (req, res) => {
	let { body } = req;

	try {
		return res.status(200).json(TodosService.create(body));
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

router.put("/:id", (req, res) => {
	let {
		body,
		params: { id },
	} = req;
	try {
		return res.status(200).json(TodosService.update(id, body));
	} catch (error) {
		return res.status(500).json(error);
	}
});

router.delete("/:id", async (req, res) => {
	let {
		params: { id },
	} = req;
	try {
		return res.status(200).json(TodosService.delete(id));
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

module.exports = router;
