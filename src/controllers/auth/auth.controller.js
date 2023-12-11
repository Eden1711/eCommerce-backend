"use strict";

const AuthController = {
  signUp: async (req, res, next) => {
    try {
      console.log(req.body);

      return res.status(201).json({
        code: "2001",
        metadata: { userId: 1 },
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = AuthController;
