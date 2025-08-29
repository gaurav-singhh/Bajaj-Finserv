const express = require("express");
const router = express.Router();
const bfhlController = require("../controllers/bfhlController");
const { validateBfhlRequest } = require("../middleware/validationMiddleware");

router.post("/", validateBfhlRequest, bfhlController.handleBfhlRequest);

module.exports = router;
