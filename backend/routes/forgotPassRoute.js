const express = require("express");
const router = express.Router();
const {
  forgotpasswordData,
  resetpassword,
  newpassword,
} = require("../controllers/forgotpassController");

router.post("/forgot", forgotpasswordData);
router.get("/resetpassword/:uuid", resetpassword);
router.post("/reset", newpassword);

module.exports = router;
