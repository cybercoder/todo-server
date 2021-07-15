const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
	return res.status(200).json("api v1");
});
router.use("/todo", require("./todo"));

module.exports = router;
