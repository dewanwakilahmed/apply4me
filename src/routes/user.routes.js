const express = require("express");

const router = express.Router();

// Controllers
const {
  registerUser,
  loginUser,
  getAuthenticatedUser,
} = require("../controllers/user.controllers");

// Middlewares
const { protectRoute } = require("../middlewares/authorization.middleware");

// Register User Route
router.post("/register", registerUser);

// Login (Authenticate) User Route
router.post("/", loginUser);

// Fetch Authenticated (Logged In) User
router.get("/", protectRoute, getAuthenticatedUser);

module.exports = router;
