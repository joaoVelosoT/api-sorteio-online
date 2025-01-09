import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const CreateUserService = async (dataUser) => {
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

    // Criptografando a senha do usuario
    const passwordCript = await bcrypt.hash(dataUser.password, 12);
    dataUser.password = passwordCript;

    // Criando o usuario
    const user = await User.create(dataUser);

    // Fazer login
    const token = await jwt.sign(
      {
        name: user.name,
        _id: user._id,
        email: user.email,
      },
      process.env.SECRET
    );

    return {
      code: 201,
      message: "Usuario criado com sucesso",
      user: {
        user,
        token,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default CreateUserService;
// module.exports = CreateUserService;
