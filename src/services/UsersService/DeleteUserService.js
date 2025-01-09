import User from "../../models/User.js";

const DeleteUserService = async (_id) => {
  try {
    // Validar se existe o usuario
    const user = await User.findById(_id);

    if (!user) {
      return {
        code: 404,
        error: {
          message: "Usuario não encontrado",
        },
      };
    }

    // Deletar usuario
    await user.deleteOne();

    return {
      code: 200,
      message: "Usuario deletado com sucesso",
      user,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default DeleteUserService