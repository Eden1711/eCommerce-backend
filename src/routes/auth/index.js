"use strict";

const express = require("express");
const AuthController = require("../../controllers/auth/auth.controller");
const { asyncHandler } = require("../../auth/checkAuth");

const router = express.Router();

// SignUp
router.post("/shop/signup", asyncHandler(AuthController.signUp));

module.exports = router;
