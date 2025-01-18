import UserDeleteService from "../../services/UsersService/UserDeleteService.js";

const UserDeleteController = async (req, res) => {
  try {
    if (req.dataAuth.role !== "admin" && req.params.id !== req.dataAuth._id) {
      return res.status(401).json({
        code: 401,
        error: {
          message: "Não autorizado",
        },
      });
    }

    const user = await UserDeleteService(req.params.id);

    if (user.error) {
      return res.status(user.code).json({
        code: user.code,
        error: {
          details: user.error.message,
        },
      });
    }

    return res.status(user.code).json({
      code: user.code,
      message: user.message,
      user: user.user,
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

export default UserDeleteController;
