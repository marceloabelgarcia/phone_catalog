const express = require("express");
const router = express.Router();
const phonesController = require("../controllers/phones");

router.get("/", phonesController.getAll);
router.get("/:id", phonesController.get);

module.exports = router;
