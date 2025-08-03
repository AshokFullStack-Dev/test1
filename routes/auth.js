const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", (req, res) => {
  res.send("Auth route working");
});

router.post("/login", usersController.loginUser);

module.exports = router;
