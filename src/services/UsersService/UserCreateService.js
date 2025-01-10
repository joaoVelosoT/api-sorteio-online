import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserCreateService = async (dataUser) => {
  try {
    // Validar se existe o email
    const existsEmail = await User.findOne({ email: dataUser.email });
    if (existsEmail) {
      return {
        code: 409,
        error: {
          message: "Email ja cadastrado no sistema",
        },
      };
    }

    // Criando o usuario
    const user = await User.create(dataUser);

    return {
      code: 201,
      message: "Usuario criado com sucesso",
      user,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default UserCreateService;
// module.exports = CreateUserService;
