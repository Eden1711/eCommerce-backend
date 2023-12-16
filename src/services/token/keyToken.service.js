const keytokenModel = require("../../models/keytoken.model");

const KeyTokenService = {
  createKeyToken: async ({ userId, publicKey }) => {
    try {
      const publicKeyString = publicKey.toString();
      const token = await keytokenModel.create({
        user: userId,
        publicKey: publicKeyString,
      });

      return token ? token.publicKey : null;
    } catch (error) {
      return error;
    }
  },
  createKeyTokenV2: async ({ userId, publicKey, privateKey, refreshToken }) => {
    try {
      // const token = await keytokenModel.create({
      //   user: userId,
      //   publicKey,
      //   privateKey,
      // });
      // return token ? token.publicKey : null;

      const tokens = await keytokenModel.findOneAndUpdate(
        { user: userId },
        { publicKey, privateKey, refreshToken, refreshTokenUsed: [] },
        { upsert: true }
      );

      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return error;
    }
  },
};

module.exports = KeyTokenService;
