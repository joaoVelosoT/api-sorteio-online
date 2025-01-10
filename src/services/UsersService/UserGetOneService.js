// const { default: User } = require("../../models/User");

import User from "../../models/User.js";

const UserGetOneService = async (_idUser) => {
  try {
    const user = await User.findById(_idUser);
    if (!user) {
      return {
        code: 404,
        error: {
          message: "Usuario não encontrado",
        },
      };
    }

    return {
      code: 200,
      message: "Usuario encontrado",
      user,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default UserGetOneService;
