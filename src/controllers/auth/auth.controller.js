"use strict";

const { Created } = require("../../core/success.response");
const AuthService = require("../../services/auth/auth.service");

const AuthController = {
  signUp: async (req, res, next) => {
    new Created({
      message: "created success",
      metadata: await AuthService.signUpV2(req.body),
    }).send(res);
  },
};

module.exports = AuthController;
