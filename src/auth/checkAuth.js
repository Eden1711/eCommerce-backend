const { findById } = require("../services/key/apikey.service");

const HEADER = { API_KEY: "x-api-key", AUTHORIZATION: "authorization" };

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return res.json({
        message: "Forbidden Error",
      });
    }

    // check objkey
    const objKey = await findById(key);
    if (!objKey) {
      return res.json({
        message: "Forbidden Error",
      });
    }
    req.objKey = objKey;
    return next();
  } catch (error) {
    return error;
  }
};

const checkPermission = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(403).json({ message: "permission denied" });
    }

    const invalidPermission = req.objKey.permissions.includes(permission);
    if (!invalidPermission) {
      return res.status(403).json({ message: "permission denied" });
    }
    return next();
  };
};

module.exports = { apiKey, checkPermission };
