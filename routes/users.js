const express = require("express");
const { body } = require("express-validator");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.post(
  "/signup",
  [
    body("username").isLength({ min: 3 }).trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  usersController.addUser
);

router.post(
  "/login",
  [body("email").isEmail().normalizeEmail(), body("password").notEmpty()],
  usersController.loginUser
);

module.exports = router;
