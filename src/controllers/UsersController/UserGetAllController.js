import UserGetAllService from "../../services/UsersService/UserGetAllService.js";

const UserGetAllController = async (req, res) => {
  try {
    const users = await UserGetAllService();
    if (users.error) {
      return res.status(users.code).json({
        code: users.code,
        error: {
          details: users.error.message,
        },
      });
    }

    return res.status(users.code).json({
      code: users.code,
      message: "Usuarios encontrados",
      users: users.users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  }
};

export default UserGetAllController;
// module.exports = GetAllUserController;
