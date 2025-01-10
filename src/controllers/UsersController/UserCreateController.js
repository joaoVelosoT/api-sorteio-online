import UserCreateService from "../../services/UsersService/UserCreateService.js";


const UserCreateController = async (req, res) => {
  try {
    const user = await UserCreateService(req.user);
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

export default UserCreateController;
// module.exports = CreateUserController;
