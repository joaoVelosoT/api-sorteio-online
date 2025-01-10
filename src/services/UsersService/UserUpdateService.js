import User from "../../models/User.js";
import bcrypt from "bcryptjs";
const UserUpdateService = async (_id, dataUser) => {
  try {
    // Validar se existe esse usuario
    const user = await User.findById(_id);
    if (!user) {
      return {
        code: 404,
        error: {
          message: "Usuario não encontrado",
        },
      };
    }
    // Se enviaram o email para atualizar, validar algumas coisas...
    if (dataUser.email) {
      // Validar se a pessoa está tentando atualizar para o seu propio email
      if (dataUser.email === user.email) {
        return {
          code: 409,
          error: {
            message:
              "Não e possivel atualizar o seu email utilizando o email ja cadastrado, por favor utilize outro",
          },
        };
      }

      // Validar se ja existe esse email no sistema
      const emailAlreadyExists = await User.findOne({ email: dataUser.email });
      if (emailAlreadyExists) {
        return {
          code: 409,
          error: {
            message: "Email ja cadastrado no sistema",
          },
        };
      }
    }

    // Aqui vamos criptografar a senha a ser atualizada
    if (dataUser.password) {
      dataUser.password = await bcrypt.hash(dataUser.password, 12);
    }

    // Atualizar o usuario
    const userUpdated = await User.findByIdAndUpdate(user._id, dataUser);

    return {
      code: 200,
      message: "Usuario atualizado com sucesso",
      user: userUpdated,
    };

    // name, email, password,
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default UserUpdateService;
