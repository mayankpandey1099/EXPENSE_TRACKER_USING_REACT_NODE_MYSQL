const express = require("express");
const router = express.Router();
const { processSignUp, processLogin } = require("../controllers/signup&loginController");


router.post("/signup",processSignUp);
router.post("/login", processLogin);

module.exports = router;