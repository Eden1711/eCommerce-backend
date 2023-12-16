const { Types } = require("mongoose");
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
  findByUserId: async (userId) => {
    return await keytokenModel.findOne({ user: userId }).lean();
  },
  removeKeyById: async (id) => {
    return await keytokenModel.deleteOne(id);
  },
};

module.exports = KeyTokenService;
