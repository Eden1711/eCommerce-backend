"use strict";

const express = require("express");
const AuthController = require("../../controllers/auth/auth.controller");
const { asyncHandler } = require("../../helpers/asyncHandle");
const { authentication } = require("../../auth/authUtils");

const router = express.Router();

// SignUp
router.post("/shop/signup", asyncHandler(AuthController.signUp));
router.post("/shop/login", asyncHandler(AuthController.login));

// authentication
router.use(authentication);
router.post("/shop/logout", asyncHandler(AuthController.logout));

module.exports = router;
