const express = require("express");
const router = express.Router();

const labelController = require("../../controllers/labelController");

// get list of all labels
router.get("/", labelController.getAllLabels);

// create label
router.post("/", labelController.createLabel);

// update label
router.patch("/:labelId", labelController.updateLabel);

// delete labels
router.delete("/:labelId", labelController.deleteLabel);

module.exports = router;
