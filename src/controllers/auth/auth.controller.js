"use strict";

const AuthService = require("../../services/auth/auth.service");

const AuthController = {
  signUp: async (req, res, next) => {
    return res.status(201).json(await AuthService.signUpV2(req.body));
  },
};

module.exports = AuthController;
