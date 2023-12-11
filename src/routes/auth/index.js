"use strict";

const express = require("express");
const AuthController = require("../../controllers/auth/auth.controller");

const router = express.Router();

// SignUp
router.post("/shop/signup", AuthController.signUp);

module.exports = router;
