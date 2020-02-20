const express = require("express");
const { Authcontroller } = require("../controllers");
const router = express.Router();

router.post("/registerusers", Authcontroller.registeruser);
router.get("/login", Authcontroller.login);
router.get("/login/:id", Authcontroller.login);

module.exports = router;
