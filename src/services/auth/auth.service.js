const shopModel = require("../../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const RoleShop = { SHOP: 0, WRITER: 1, EDITOR: 2, ADMIN: 4 };

const AuthService = {
  signUp: async (body) => {
    try {
      const { name, email, password } = body;
      const holderShop = await shopModel.findOne({ email }).lean();

      if (holderShop) {
        return {
          code: "xxx",
          message: "Shop already register",
          status: "error",
        };
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: RoleShop.SHOP,
      });

      if (newShop) {
        // create PrivateKey,publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
        });
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  },
};

module.exports = AuthService;
