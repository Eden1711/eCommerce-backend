"use strict";

const express = require("express");
const AuthController = require("../../controllers/auth/auth.controller");
const { asyncHandler } = require("../../auth/checkAuth");

const router = express.Router();

// SignUp
router.post("/shop/signup", asyncHandler(AuthController.signUp));
router.post("/shop/login", asyncHandler(AuthController.login));

module.exports = router;
