const express = require("express");
const { signup } = require("../controllers/insuranceController");
const requireAdminAuth = require("../middlewares/requireAdminAuth");

const router = express.Router();

router.post("/signup",requireAdminAuth,signup);  

module.exports = router;

