"use strict";

const AuthService = require("../../services/auth/auth.service");

const AuthController = {
  signUp: async (req, res, next) => {
    try {
      console.log(req.body);

      return res.status(201).json(await AuthService.signUpV2(req.body));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = AuthController;
