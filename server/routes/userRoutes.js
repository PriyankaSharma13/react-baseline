// userRoutes.js
const express = require("express");
const { registerUser, sendEmail, loginUser } = require("../controllers/usercontroller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/send-email", sendEmail);
module.exports = router;