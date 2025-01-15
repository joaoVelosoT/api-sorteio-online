import User from "../../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserCreateService from "../../UsersService/UserCreateService.js";
const UserRegisterService = async (dataRegister) => {
  try {
    // Criptografando a senha do usuario
    const passwordCript = await bcrypt.hash(dataRegister.password, 12);
    dataRegister.password = passwordCript;

    // Criando o usuario
    const user = await UserCreateService(dataRegister);
    if (user.error) {
      return user;
    }

    // Fazer login
    const token = await jwt.sign(
      {
        name: user.name,
        _id: user._id,
        email: user.email,
        isAdmin : false
      },
      process.env.SECRET
    );

    return {
      code: 201,
      message: "Usuario registrado com sucesso",
      register: {
        user: user.user,
        token,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default UserRegisterService;
